# shopbag

# Introducing shopbag
- Deployed WebSite Link = https://mellow-palmier-225434.netlify.app/
- Deployed Backend URL  = https://thankful-mittens-duck.cyclic.app

![shopbag](https://raw.githubusercontent.com/punitjuneja123/shopbag/main/images/shopbag.png)

# What is shopbag??

Shopbag is a online shoping platform from where you can buy different products across categories like fashion, electronics, etc.


---

# Features :-

- Login / Signup
- Search functionality.
- User can sort products by prices.
- Add to cart feature.

---

# Tech Stack Used: -

## Frontend

| HTML                                                                                                                           | CSS                                                                                                                            | JavaScript                                                                                                                     |                                                                                                                   |                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------
| <img width="75px" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"> | <img width="75px" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"> | <img width="70px" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"> |

## Backend : -

| Node.js                                                                                                                         | Express.js                                                                                                                      | MongoDB                                                                                                       |                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| <img width="70px" src="https://user-images.githubusercontent.com/112753481/229047696-de3bf177-16a0-4161-a140-dd89e4fe7b22.png"> | <img width="75px" src="https://user-images.githubusercontent.com/112753481/229164589-4e724000-542d-4deb-9e11-cca7739c2b01.png"> | <img width="75px" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"> |

---

# Routes :-
- ### Users Routes

| METHOD | ENDPOINT        | WHAT IT DOES                                                                          |
| ------ | --------------- | ------------------------------------------------------------------------------------- |
| POST   | /users/register | -> Register New User (Requires user details in req.body)                              |
| POST   | /users/signin    | -> Login existing user (Requires email and passwords, returns token if login success) |

- ### Product Routes

| METHOD | ENDPOINT           | WHAT IT DOES                                                         |
| ------ | ------------------ | -------------------------------------------------------------------- |
| GET    | /product  | -> Getting All the product categories              |
| GET   | /product/:productcategory  | -> Get all product of a particular category |
| GET | /product/productview/:id | -> Get a single product detail's by id                                                   |
| GET  | /product/search/:search | -> search for a product                                                   |

- ### Cart Routes

| METHOD | ENDPOINT          | WHAT IT DOES                                                                 |
| ------ | ----------------- | ---------------------------------------------------------------------------- |
| GET    | /cart       | -> Get products that are added to cart by userId in req.body                         |
| POST   | /cart | -> Add product to cart |
| PATCH  | /cart/upadtequantity/:id | -> update quantity of product added to cart |
| DELETE | /cart/delete/:id | -> Delete product from cart |


- ### Admin Routes

| METHOD | ENDPOINT         | WHAT IT DOES                                     |
| ------ | ---------------- | ------------------------------------------------ |
| GET    | /admproduct      | -> Get products posted by admin (by userID in req.body) |
| POST   | /admproduct/create | -> add new product |
| PATCH    | /admproduct/update/:id    | -> Update product details |

---
## Thankyou for your Time :raised_hands: 💝

