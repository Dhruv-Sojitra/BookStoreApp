import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center">📚 About Us</h1>
        <p className="text-lg italic">
          Welcome to BookStore – your cozy corner for discovering, enjoying, and
          collecting great books! At BookStore, we believe that every story has
          the power to inspire, teach, and transport us to another world.
          Whether you're a lifelong bookworm or just starting your reading
          journey, our goal is to make books more accessible, enjoyable, and
          tailored to your taste.
        </p>
        <br />
        <h1 className="text-2xl font-bold text-center">🛍️ What We Offer</h1>
        <p className="text-lg">
          Curated Book Collections: From timeless classics to the latest
          bestsellers, our carefully curated catalog covers a wide range of
          genres to suit every reader. Seamless Shopping Experience: Browse,
          preview, and purchase books easily with our user-friendly app
          interface. Personalized Recommendations: Get book suggestions based on
          your reading history and interests. Wishlist & Favorites: Save books
          you love or want to read later never lose track of a great find!
        </p>
        <br />
        <h1 className="text-2xl font-bold text-center">💡 Our Mission</h1>
        <p className="text-lg">
          To ignite a love for reading by connecting people with stories that
          matter. We aim to build a community of readers who explore, share, and
          grow through books.
        </p>
        <br />
        <h1 className="text-2xl font-bold text-center">🧡 Why bookStore?</h1>
        <p className="text-lg">
          We're more than just a bookstore – we're a space where book lovers
          feel at home. With a modern design, thoughtful features, and a passion
          for storytelling, bookStore makes reading simple, personal, and
          magical.
        </p>
        <br />
        <br />
        <h2 className="text-xl text-center">
          Discover your next favorite book with bookStore today!
        </h2>
        <br />
        <div className="flex justify-center">
          <Link to="/">
            <button className="btn btn-soft btn-sm btn-primary ">
              Go To Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
