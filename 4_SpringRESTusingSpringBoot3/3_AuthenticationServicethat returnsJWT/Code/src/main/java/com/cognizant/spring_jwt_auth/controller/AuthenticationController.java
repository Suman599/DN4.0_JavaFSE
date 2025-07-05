package com.cognizant.spring_jwt_auth.controller;

import com.cognizant.spring_jwt_auth.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/authenticate")
    public String authenticate(@RequestHeader("Authorization") String authHeader) {
        // Basic auth format: "Basic dXNlcjpwd2Q=" (user:pwd)
        String base64Credentials = authHeader.substring("Basic ".length());
        byte[] credDecoded = java.util.Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(credDecoded);
        String username = credentials.split(":", 2)[0];

        return jwtUtil.generateToken(username);
    }
}
