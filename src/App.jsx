import './App.css';

const app = ()=> {
  return (
    <div className="container">
      <header className="header">
        <h1>Wanderlust Diaries</h1>
        <p>Sharing stories from around the world</p>
      </header>

      <section className="blog-posts">
        <h2>Blog Posts</h2>
        <div>
          <article className="post">
            <div class="img-cont">
              <img src="https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <h3>Exploring Bali</h3>
            <p>A magical journey through rice terraces, temples, and surf spots.</p>
          </article>
        </div>
        <div>
          <article className="post">
            <div class="img-cont">
              <img src="https://images.unsplash.com/photo-1578914267414-e2bef8adecd7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <h3>Adventure in the Alps</h3>
            <p>Snow-capped peaks, cozy cabins, and scenic hikes that take your breath away.</p>
          </article>
        </div>
        <div>
          <article className="post">
            <div class="img-cont">
              <img src="https://images.unsplash.com/photo-1644325535323-62fdfb4f2673?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <h3>Safari in Kenya</h3>
            <p>Witnessed the great migration and encountered the Big Five in the wild savannah.</p>
          </article>
        </div>
        <div>
          <article className="post">
            <div class="img-cont">
              <img src="https://images.unsplash.com/photo-1671597728634-7a8fc32f3051?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <h3>Street Food in Bangkok</h3>
            <p>Exploring vibrant markets and indulging in the most flavorful dishes Thailand has to offer.</p>
          </article>
        </div>
      </section>

      <section className="gallery">
        <h2>Photo Gallery</h2>
        <div className="grid">
          <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Beach" />
          <img src="https://images.unsplash.com/photo-1598858715214-3d0f6219e267?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mountains" />
          <img src="https://plus.unsplash.com/premium_photo-1682656220562-32fde8256295?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City" />
          <img src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Forest" />
          <img src="https://images.unsplash.com/photo-1515581247767-d78687bf2254?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Desert" />
          <img src="https://images.unsplash.com/photo-1493713838217-28e23b41b798?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Waterfall" />
        </div>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default app
