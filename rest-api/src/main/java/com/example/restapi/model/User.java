package com.example.restapi.model;
import java.time.LocalTime;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection="Userlist")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    
    @Id
    private String id;
     private String email;
    private List<UserData> userData;
     
    private String password;
    public String getId() {
        return id;
    }
    public List<UserData> getUserData() {
        return userData;
    }
    public void setUserData(List<UserData> userData) {
        this.userData = userData;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}
