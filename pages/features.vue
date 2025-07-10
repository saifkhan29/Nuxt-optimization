<template>
  <div class="features-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <h1 class="hero-title">Discover Amazing Features</h1>
        <p class="hero-subtitle">Unlock a world of possibilities with our next-gen platform</p>
        <button class="cta-btn">Get Started</button>
      </div>
    </section>

    <!-- Feature Cards Section -->
    <section class="cards-section">
      <div class="feature-card">
        <img src="/images/bmw-1.jpg" alt="Analytics" class="card-img" />
        <h2>Real-Time Analytics</h2>
        <p>Track your data live with beautiful, interactive dashboards.</p>
      </div>
      <div class="feature-card">
        <img src="/images/mercedes-1.jpg" alt="Integrations" class="card-img" />
        <h2>Seamless Integrations</h2>
        <p>Connect with your favorite tools and automate your workflow.</p>
      </div>
      <div class="feature-card">
        <img src="/images/bmw-1.jpg" alt="Security" class="card-img" />
        <h2>Top-Notch Security</h2>
        <p>Enjoy peace of mind with industry-leading security features.</p>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits-section">
      <div class="benefit">
        <span class="benefit-icon">🌍</span>
        <h3>Global Access</h3>
        <p>Use our platform from anywhere in the world, anytime.</p>
      </div>
      <div class="benefit">
        <span class="benefit-icon">⚡️</span>
        <h3>Lightning Fast</h3>
        <p>Experience blazing fast performance and instant results.</p>
      </div>
      <div class="benefit">
        <span class="benefit-icon">💬</span>
        <h3>24/7 Support</h3>
        <p>Our team is always here to help you succeed.</p>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section">
      <h2>Ready to get started?</h2>
      <button class="cta-btn large">Join Now</button>
    </section>
  </div>
</template>

<script setup lang="ts">
// No additional logic for now
</script>

<style scoped>
.features-page {
  font-family: 'Montserrat', Arial, sans-serif;
  background: linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%);
  min-height: 100vh;
  color: #232526;
}
.hero-section {
  position: relative;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
}
.hero-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('/images/bmw-1.jpg') center/cover no-repeat;
  filter: blur(4px) brightness(0.7);
  z-index: 1;
  border-radius: 0 0 32px 32px;
}
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
}
.hero-title {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}
.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}
.cta-btn {
  background: linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%);
  color: #232526;
  border: none;
  border-radius: 30px;
  padding: 0.8rem 2.2rem;
  font-size: 1.1rem;
  font-weight: 700;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}
.cta-btn:hover {
  background: linear-gradient(90deg, #c2e9fb 0%, #a1c4fd 100%);
  transform: scale(1.06);
}
.cta-btn.large {
  font-size: 1.3rem;
  padding: 1rem 3rem;
  margin-top: 1.5rem;
}
.cards-section {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}
.feature-card {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  width: 320px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;
  animation: float-in 1.2s cubic-bezier(.68,-0.55,.27,1.55);
}
.feature-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
}
.card-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  transition: transform 0.3s;
}
.feature-card:hover .card-img {
  transform: scale(1.07) rotate(-2deg);
}
@keyframes float-in {
  from { opacity: 0; transform: translateY(40px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.benefits-section {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}
.benefit {
  background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  border-radius: 16px;
  padding: 1.5rem 2rem;
  min-width: 220px;
  text-align: center;
  color: #232526;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  transition: box-shadow 0.3s, transform 0.3s;
  animation: fade-in 1.2s;
}
.benefit:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.13);
  transform: scale(1.04);
}
.benefit-icon {
  font-size: 2.2rem;
  margin-bottom: 0.7rem;
  display: block;
}
@keyframes fade-in {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.cta-section {
  background: linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%);
  border-radius: 24px;
  text-align: center;
  padding: 2.5rem 1rem;
  margin: 3rem auto 2rem auto;
  max-width: 600px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
}
.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 1.2rem;
  color: #232526;
}
@media (max-width: 900px) {
  .cards-section, .benefits-section {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  .feature-card {
    width: 90vw;
    max-width: 350px;
  }
}
</style>
