package com.user.msvusers.repository;

import com.user.msvusers.model.entity.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Long> {

    @Modifying
    @Query("delete from UserOrder uo where uo.orderId=?1")
    void deleteUserOrderById(Long id);

}
