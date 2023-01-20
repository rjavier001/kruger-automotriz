package com.order.msvorder.services.payment;

import com.order.msvorder.entity.Payment;

import java.util.List;

public interface IPaymentService {
    public Payment createPayment(Payment payment);
    public Payment getPayment(Long id);
    public List<Payment> findAllPayments();
}
