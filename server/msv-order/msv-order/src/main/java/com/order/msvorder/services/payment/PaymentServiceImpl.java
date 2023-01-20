package com.order.msvorder.services.payment;

import com.order.msvorder.entity.Payment;
import com.order.msvorder.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class PaymentServiceImpl implements IPaymentService{

    @Autowired
    PaymentRepository paymentRepository;

    public Payment createPayment(Payment payment){
        payment.setCreated(new Date());
        return paymentRepository.save(payment);
    }
    // -------------------getPayment by ID service--------------------------------------------
    public Payment getPayment(Long id){
        return paymentRepository.findById(id).orElse(null);
    }
    @Override
    public List<Payment> findAllPayments() {
        return  paymentRepository.findAll();
    }
}
