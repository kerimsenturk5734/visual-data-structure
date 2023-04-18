package com.kerimsenturk.visualdatastruct.auth;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

@Component
public class JwtTokenFilter extends OncePerRequestFilter {

    private final TokenManager tokenManager;

    public JwtTokenFilter(TokenManager tokenManager) {
        this.tokenManager = tokenManager;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        final String autHeader=request.getHeader("Authorization");
        String mail = null;
        String token = null;

        if(autHeader!=null && autHeader.contains("Bearer")){
            token=autHeader.substring(7);
            try {
                mail=tokenManager.getUser(token);
            }
            catch (Exception e){
                System.out.println(e.getMessage());
            }
        }

        if(mail!=null & token!=null & SecurityContextHolder.getContext().getAuthentication() == null){

            if(tokenManager.validate(token)){
                UsernamePasswordAuthenticationToken usPassAuthToken=
                        new UsernamePasswordAuthenticationToken(mail,null,new ArrayList<>());

                usPassAuthToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(usPassAuthToken);
            }
        }

        filterChain.doFilter(request,response);
    }
}
