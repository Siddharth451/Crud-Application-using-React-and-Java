package com.example.restapi.repository;
import com.example.restapi.model.User;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface UserRepository extends MongoRepository<User, String>{
    public List<User> findByEmail(String email);
    //public List<User> findByLastName(String lastName);
  
}
