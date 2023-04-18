package com.kerimsenturk.visualdatastruct.exception;

import io.jsonwebtoken.ClaimJwtException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Header;

public class ClaimNotFoundException extends ClaimJwtException {
    public ClaimNotFoundException(Header header, Claims claims, String message) {
        super(header, claims, message);
    }

}
