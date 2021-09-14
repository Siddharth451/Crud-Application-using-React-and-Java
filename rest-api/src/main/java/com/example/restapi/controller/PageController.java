package com.example.restapi.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import com.example.restapi.model.User;
import com.example.restapi.model.UserData;
import com.example.restapi.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.ReadOnlyProperty;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch.qos.logback.core.joran.conditional.ElseAction;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class PageController {
    
    @Autowired
    private UserRepository userRepository;


    @PostMapping("/register")
    public String registerUser(@RequestBody User user){
      userRepository.save(user);

      return user.getId();
    }
    @PostMapping("/login")
      public String verify(@RequestBody User user){
        List<User>data=userRepository.findByEmail(user.getEmail());
        if(!data.isEmpty()){
          return data.get(0).getId();
        }
        else
        return "";
      }
    
    /*@GetMapping("/records")
   public ResponseEntity<?> getUser(){
      List<User>user=userRepository.findAll();
      return new ResponseEntity<>(user,HttpStatus.OK);
   }*/

  @PostMapping("/{id}")
  public void createRecords(@PathVariable("id")String id, @RequestBody UserData user){
    Optional<User>optional=userRepository.findById(id);
    if(optional.isPresent()){
       User dataToSave=optional.get();
       
       List<UserData>l1=dataToSave.getUserData();
       if(l1!=null){
       l1.add(user);
      dataToSave.setUserData(l1);
       }
       else{
         List<UserData>l2=new ArrayList<>();
         l2.add(user);
         dataToSave.setUserData(l2);
       }
      
     //  dataToSave.setUserData(a);
      /* dataToSave.setEmail(user.getEmail()!=null?user.getEmail():dataToSave.getEmail());
       dataToSave.setPassword(user.getPassword()!=null?user.getPassword():dataToSave.getPassword());
      dataToSave.setUserData(a);*/
       userRepository.save(dataToSave);
    }
    
    
      
  }
  @GetMapping("/{id}")
 public ResponseEntity<?> getSingleRecord(@PathVariable("id")String id){
   Optional<User>optional=userRepository.findById(id);

   if(optional.isPresent())
   return new ResponseEntity<>(optional.get(),HttpStatus.OK);
   else
   return new ResponseEntity<>("cannot find data",HttpStatus.NOT_FOUND);

 }
 @PutMapping("/{id}/{index}")
public ResponseEntity<?> updateUser(@PathVariable ("id")String id,@PathVariable("index")int index,@RequestBody UserData user){
   Optional<User>optional=userRepository.findById(id);
    if(optional.isPresent()){
       User dataToSave=optional.get();
       
       List<UserData>l1=dataToSave.getUserData();
      l1.set(index, user);
     // dataToSave.setUserData(l1);

     userRepository.save(dataToSave);
     return new ResponseEntity<>(dataToSave,HttpStatus.OK);
  }
  else
    return new ResponseEntity<>("Cannot find user",HttpStatus.NOT_FOUND);
 }
 
 @GetMapping("/{id}/{index}")
 public ResponseEntity<?>getSpecificUser(@PathVariable("id") String id,@PathVariable("index") int index){
  Optional<User>optional=userRepository.findById(id);

  if(optional.isPresent())
  return new ResponseEntity<>(optional.get().getUserData().get(index),HttpStatus.OK);
  else
  return new ResponseEntity<>("cannot find data",HttpStatus.NOT_FOUND);

 }

 @DeleteMapping("/{id}/{index}")
 public ResponseEntity<?> deleteRecord(@PathVariable("id") String id , @PathVariable("index") int index){
     
      Optional<User>optional=userRepository.findById(id);
    if(optional.isPresent()){
       User dataToSave=optional.get();
       
       List<UserData>l1=dataToSave.getUserData();
      l1.remove(index);
     dataToSave.setUserData(l1);
     userRepository.save(dataToSave);
       return new ResponseEntity<>("Successfully deleted record",HttpStatus.OK);
    }
    else
       return new ResponseEntity<>("Cannot find record",HttpStatus.NOT_FOUND);
       }
}

