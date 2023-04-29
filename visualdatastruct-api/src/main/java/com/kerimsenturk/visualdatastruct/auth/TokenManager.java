package com.kerimsenturk.visualdatastruct.auth;

import com.kerimsenturk.visualdatastruct.exception.ClaimNotFoundException;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.token.DefaultToken;
import org.springframework.security.core.token.Token;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;


@Service
public class TokenManager{

    private final int validity=5*60*100000;
    private final String issuer="com.visualdatastruct";
    private final Key key=Keys.secretKeyFor(SignatureAlgorithm.HS256);
    public Token generate(String mail){
        String tokenKey=Jwts.builder()
                .setSubject(mail)
                .setIssuer(issuer)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis()+validity))
                .signWith(key)
                .compact();

        return new DefaultToken(tokenKey, new Date().getTime(),"Bearer Jwt Token");
    }

    private Claims getClaims(String token) {
        Claims claims=Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();

        if(claims.isEmpty())
            throw new ClaimNotFoundException(Jwts.header(),claims,"Claims Not Found By "+token);

        return claims;
    }

    public boolean validate(String token){

       return getUser(token)!=null && !isExpired(token);
    }
    public String getUser(String token){
        Claims claims = getClaims(token);

        return claims.getSubject();
    }



    public boolean isExpired(String token){
        Claims claims = getClaims(token);
        return claims.getExpiration().before(new Date(System.currentTimeMillis()));
    }

}
