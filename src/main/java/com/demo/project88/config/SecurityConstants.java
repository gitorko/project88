package com.demo.project88.config;

public class SecurityConstants {
    public static final String SECRET = "SECRET_KEY";
    public static final long EXPIRATION_TIME = 900_000; // 15 mins
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final String LOGIN_URL = "/login";

    public static final String USER_ROLE = "ROLE_ADMIN";
    public static final String USER_NAME = "admin";
    public static final String USER_PASSWORD = "admin@123";
}
