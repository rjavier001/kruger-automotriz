package com.user.msvusers.repository;

import com.user.msvusers.model.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Long> {
}
