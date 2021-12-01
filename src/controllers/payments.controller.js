import { response } from "express";

export const createOrder = (req, res = response) => {
    res.send('Creating order')
}

export const captureOrder = (req, res = response) => {
    res.send('capturing order')
}

export const cancelOrder = (req, res = response) => {
    res.send('Cancel order')
}