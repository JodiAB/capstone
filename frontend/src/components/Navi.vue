<template>
    <div>
      <nav class="navbar">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/products">Products</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/admin">Admin</router-link> |
      </nav>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
   
    background-color: black;
    box-shadow: 0 2px 4px rgba(241, 241, 241, 0.1);
    text-align: center;
    
  }
  
  .navbar a {
    font-weight: 600; /* Semi-bold */
    color: #81a146;
    text-decoration: none;
    padding: 0 10px;
  }
  
  .navbar a.router-link-exact-active {
    color: #d8fa1b;
  }
  </style>