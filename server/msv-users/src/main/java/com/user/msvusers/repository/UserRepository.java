package com.user.msvusers.repository;

import com.user.msvusers.model.entity.User;
import feign.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {

    @Modifying
    @Query("delete from UserOrder uo where uo.orderId=?1")
    void deleteUserOrderById(Long id);

    @Query("SELECT u FROM User u WHERE u.user_id = :userId")
    Optional<User> findByAuthId(@Param("userId")int userId);
}
