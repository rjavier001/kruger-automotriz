package com.user.msvusers.repository;

import com.user.msvusers.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Long> {
}
