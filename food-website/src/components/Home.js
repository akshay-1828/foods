import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const navigate = useNavigate();

  const featuredDishes = [
    {
      name: "Grilled Chicken",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?fit=crop&w=500&q=60",
    },
    {
      name: "Veggie Pizza",
      image: "https://www.twopeasandtheirpod.com/wp-content/uploads/2021/03/Veggie-Pizza-8.jpg",
    },
    {
      name: "Cheeseburger",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?fit=crop&w=500&q=60",
    },
    {
      name: "Pasta Alfredo",
      image: "https://th.bing.com/th/id/OIP.LzbvMmKys54tSxgfX53_RQAAAA?rs=1&pid=ImgDetMain",
    },
    {
      name: "Sushi Platter",
      image: "https://th.bing.com/th/id/OIP.09B9IDU0AZySe8AhU8VEkwHaE7?rs=1&pid=ImgDetMain",
    },
    {
      name: "Tacos",
      image: "https://www.thefoodinmybeard.com/content/taco/whitepeople/wpt10.jpg",
    },
    {
      name: "Ice Cream",
      image: "https://tse2.mm.bing.net/th?id=OIP.HsrA5OUP2XuY8WH-xNBRtgHaGi&pid=Api&P=0&h=180",
    },
    {
      name: "Cake",
      image: "https://tse4.mm.bing.net/th?id=OIP.hm7t6lJkzOywBmm54RzhBAHaLH&pid=Api&P=0&h=180",
    },
    {
      name: "South Indian Food",
      image: "https://tse3.mm.bing.net/th?id=OIP.1NmSY68F190B2-emopWyewHaHa&pid=Api&P=0&h=180",
    },
    {
      name: "North Indian Food",
      image: "https://tse3.mm.bing.net/th?id=OIP.DtEQHPoBsd1WlPegSiO6lwHaF5&pid=Api&P=0&h=180",
    },
  ];

  return (
    <main className="home">
      <h2>Welcome to Foodies Hub!</h2>
      <p>Explore our delicious menu and order your favorites today!</p>
      <section className="featured">
        <h3>Featured Dishes</h3>
        <div className="dishes-container">
          {featuredDishes.map((dish, index) => (
            <div 
              key={index} 
              className="dish" 
              onClick={() => navigate("/menu")} // Navigate to the menu page on click
            >
              <img src={dish.image} alt={dish.name} className="dish-image" />
              <p>{dish.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
