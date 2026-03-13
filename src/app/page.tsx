"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles, Trophy, Zap, Shield, Star, Target, CheckCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="large"
      background="noise"
      cardStyle="gradient-mesh"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Teams", id: "teams" },
            { name: "Shop", id: "shop" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="ELITE PUCK"
          bottomLeftText="Global Hockey Community"
          bottomRightText="contact@elitepuck.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="DOMINATE THE ICE"
          description="Experience elite-level hockey performance with our premium equipment, world-class coaching, and proven championship mentality. Train with legends, play like champions."
          tag="ELITE HOCKEY"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Join Our Academy", href: "#shop" },
            { text: "Watch Highlights", href: "#features" }
          ]}
          buttonAnimation="slide-up"
          carouselItems={[
            { id: "carousel-1", imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-baseball-player_23-2150885095.jpg", imageAlt: "professional ice hockey player skating fast action" },
            { id: "carousel-2", imageSrc: "http://img.b2bpic.net/free-photo/young-people-having-time-winter-time_329181-13082.jpg", imageAlt: "hockey team celebration goal scored" },
            { id: "carousel-3", imageSrc: "http://img.b2bpic.net/free-photo/field-hockey-players-tournament-game_23-2149668559.jpg", imageAlt: "hockey stadium arena crowd fans" },
            { id: "carousel-4", imageSrc: "http://img.b2bpic.net/free-photo/serious-pensive-hockey-player-has-photo-session-photo-studio_613910-13284.jpg", imageAlt: "hockey player in full gear skating" },
            { id: "carousel-5", imageSrc: "http://img.b2bpic.net/free-photo/african-american-man-posing-with-soccer-ball_23-2148767615.jpg", imageAlt: "hockey goalie making save block" },
            { id: "carousel-6", imageSrc: "http://img.b2bpic.net/free-photo/group-friends-together-supporting-football-team_329181-19080.jpg", imageAlt: "hockey champions lifting trophy" }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
          background={{ variant: "rotated-rays-static" }}
          className="w-full"
          containerClassName="flex items-center justify-center"
          titleClassName="text-5xl lg:text-7xl font-bold tracking-tight"
          descriptionClassName="text-lg lg:text-xl max-w-2xl"
          buttonContainerClassName="flex gap-4 flex-wrap"
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="OUR LEGACY"
          tagIcon={Trophy}
          tagAnimation="slide-up"
          title="Built on Excellence & Tradition"
          description="Elite Puck Hockey represents over 25 years of championship excellence, training world-class athletes who compete at the highest levels of professional hockey."
          subdescription="From youth development to pro training camps, our comprehensive programs combine proven coaching methods with cutting-edge sports science. Our alumni have played in the Stanley Cup Finals and represented their nations on the international stage."
          icon={CheckCircle}
          imageSrc="http://img.b2bpic.net/free-photo/hockey-players_654080-2149.jpg"
          imageAlt="Professional hockey coaching session"
          mediaAnimation="opacity"
          useInvertedBackground={false}
          containerClassName="flex flex-col lg:flex-row gap-12 items-center"
          titleClassName="text-4xl lg:text-5xl font-bold"
          descriptionClassName="text-base lg:text-lg max-w-xl"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyOne
          tag="WHAT SETS US APART"
          tagIcon={Zap}
          tagAnimation="slide-up"
          title="Advanced Training Programs"
          description="Our integrated approach combines biomechanical analysis, nutrition coaching, mental performance training, and elite conditioning to develop complete hockey players."
          buttons={[
            { text: "Explore Programs", href: "#pricing" }
          ]}
          buttonAnimation="slide-up"
          accordionItems={[
            { id: "acc-1", title: "Pro-Level Coaching Staff", content: "Learn from former NHL players and Olympic coaches who have competed at the highest levels and understand what it takes to succeed in elite hockey." },
            { id: "acc-2", title: "State-of-the-Art Facilities", content: "Train on NHL-regulation ice with professional-grade equipment, video analysis suites, and performance tracking technology used by professional teams." },
            { id: "acc-3", title: "Personalized Development Plans", content: "Every athlete receives a customized training roadmap based on comprehensive skill assessments, athletic testing, and individual goals." },
            { id: "acc-4", title: "Nutrition & Sports Science", content: "Our sports nutritionists and strength coaches optimize performance through evidence-based training and recovery protocols." }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/hockey-players_654080-2153.jpg"
          imageAlt="Modern hockey training facility"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          mediaPosition="right"
          titleClassName="text-4xl lg:text-5xl font-bold"
          descriptionClassName="text-base lg:text-lg max-w-2xl"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          tag="PREMIUM EQUIPMENT"
          tagIcon={Shield}
          tagAnimation="slide-up"
          title="Professional-Grade Hockey Gear"
          description="Equip yourself with the same equipment trusted by professional athletes. Each product is engineered for performance, durability, and competitive advantage."
          buttons={[
            { text: "View Full Catalog", href: "#shop" }
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="scale-rotate"
          carouselMode="buttons"
          products={[
            { id: "stick-pro", name: "Pro Carbon Hockey Stick", price: "$299.99", imageSrc: "http://img.b2bpic.net/free-photo/field-hockey-player-training-practicing-sport-grass_23-2149668598.jpg", imageAlt: "Professional hockey stick", isFavorited: false, initialQuantity: 1 },
            { id: "goalie-pads", name: "Elite Goalie Pad Set", price: "$599.99", imageSrc: "http://img.b2bpic.net/free-photo/hockey-player-black-sportswear-white-helmet-holds-gaming-stick-grey-background_613910-9778.jpg", imageAlt: "Professional goalie pads", isFavorited: false, initialQuantity: 1 },
            { id: "skates-pro", name: "Championship Ice Skates", price: "$449.99", imageSrc: "http://img.b2bpic.net/free-psd/hockey-tournament-banner-template_23-2149195997.jpg", imageAlt: "Professional ice hockey skates", isFavorited: false, initialQuantity: 1 }
          ]}
          titleClassName="text-4xl lg:text-5xl font-bold"
          descriptionClassName="text-base lg:text-lg max-w-2xl"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTen
          tag="BY THE NUMBERS"
          tagIcon={Target}
          tagAnimation="slide-up"
          title="Our Track Record of Excellence"
          description="Elite Puck has consistently produced world-class hockey players. These numbers represent our commitment to excellence and proven results."
          buttons={[
            { text: "Meet Our Champions", href: "#team" }
          ]}
          buttonAnimation="slide-up"
          textboxLayout="centered"
          useInvertedBackground={false}
          animationType="scale-rotate"
          carouselMode="buttons"
          uniformGridCustomHeightClasses="min-h-80"
          metrics={[
            { id: "metric-1", title: "Championship Titles", subtitle: "League & Tournament Wins", category: "Success", value: "47" },
            { id: "metric-2", title: "Professional Players", subtitle: "Developed & Trained", category: "Athletes", value: "312" },
            { id: "metric-3", title: "Years of Excellence", subtitle: "Continuous Service", category: "Legacy", value: "25" },
            { id: "metric-4", title: "International Medals", subtitle: "Olympic & World Championships", category: "Global", value: "89" }
          ]}
          titleClassName="text-4xl lg:text-5xl font-bold"
          descriptionClassName="text-base lg:text-lg max-w-2xl"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          tag="ATHLETE STORIES"
          tagIcon={Star}
          tagAnimation="slide-up"
          title="Voices of Champions"
          description="Hear from professional athletes, coaches, and team executives who have transformed their careers through Elite Puck's comprehensive training and mentorship programs."
          buttons={[
            { text: "See More Stories", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          carouselMode="buttons"
          testimonials={[
            { id: "testimonial-1", name: "Marcus Chen", role: "Professional Forward", company: "National Hockey League", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-sportswear-gym_1303-20732.jpg", imageAlt: "Marcus Chen professional athlete" },
            { id: "testimonial-2", name: "Jessica Rodriguez", role: "Olympic Athlete", company: "Team Canada Women's Hockey", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/woman-looks-attentively-camera-motivates-you-go-sport-wears-wireless-headphones-around-neck-dressed-sportswear-going-have-fitness-training-poses-outdoors_273609-55696.jpg", imageAlt: "Jessica Rodriguez Olympic athlete" },
            { id: "testimonial-3", name: "Coach David Hutchins", role: "Head Coach", company: "Elite Puck Training Center", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-fit-girl-enjoying-favorite-music_1262-18243.jpg", imageAlt: "Coach David Hutchins professional coach" },
            { id: "testimonial-4", name: "Sarah Thompson", role: "Sports Director", company: "Regional Hockey Association", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1675.jpg", imageAlt: "Sarah Thompson sports director" },
            { id: "testimonial-5", name: "Alex Kowalski", role: "Youth Academy Graduate", company: "Professional Development League", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-fitness-woman-earphones_171337-13340.jpg", imageAlt: "Alex Kowalski young athlete" },
            { id: "testimonial-6", name: "Dr. Patricia Wells", role: "Sports Medicine Director", company: "Olympic Training Center", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/caucasian-man-blazer-sitting-desk-office-with-laptop-looking-camera_1098-20318.jpg", imageAlt: "Dr. Patricia Wells sports medicine" }
          ]}
          titleClassName="text-4xl lg:text-5xl font-bold"
          descriptionClassName="text-base lg:text-lg max-w-2xl"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          tag="QUESTIONS?"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          title="Frequently Asked Questions"
          description="Get answers to common questions about our programs, facilities, and enrollment process."
          buttons={[
            { text: "Contact Us", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          animationType="smooth"
          faqs={[
            { id: "faq-1", title: "What age groups do you accept?", content: "We offer programs for youth ages 6 and up through professional development levels. Each age group has specialized coaching tailored to their developmental stage and skill level." },
            { id: "faq-2", title: "Do I need prior hockey experience?", content: "No! Our beginner programs are designed for athletes with no experience. We also have advanced programs for experienced players looking to reach elite levels." },
            { id: "faq-3", title: "What is the typical program duration?", content: "Programs range from short-term camps (1-2 weeks) to full-season training (September-March). We offer flexible scheduling to accommodate school and other commitments." },
            { id: "faq-4", title: "Are scholarships available?", content: "Yes, we offer merit-based scholarships and financial assistance programs for qualified athletes. Contact our admissions team to discuss scholarship opportunities." },
            { id: "faq-5", title: "What equipment do I need to bring?", content: "We provide detailed equipment lists for each program. Most specialized equipment is available for rental at the facility. We can recommend quality gear vendors." },
            { id: "faq-6", title: "How do you track player progress?", content: "We use advanced video analysis, performance metrics, and regular skills assessments. Parents receive monthly progress reports and video highlights of their child's development." }
          ]}
          titleClassName="text-4xl lg:text-5xl font-bold"
          descriptionClassName="text-base lg:text-lg max-w-2xl"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="ELITE PUCK"
          columns={[
            {
              items: [
                { label: "Home", href: "#home" },
                { label: "Programs", href: "#features" },
                { label: "Shop", href: "#products" },
                { label: "About", href: "#about" }
              ]
            },
            {
              items: [
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
                { label: "Privacy Policy", href: "#" }
              ]
            },
            {
              items: [
                { label: "Twitter", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Facebook", href: "#" },
                { label: "YouTube", href: "#" }
              ]
            },
            {
              items: [
                { label: "contact@elitepuck.com", href: "mailto:contact@elitepuck.com" },
                { label: "+1 (555) 123-4567", href: "tel:+15551234567" },
                { label: "123 Ice Arena Blvd", href: "#" },
                { label: "Champion City, HC 12345", href: "#" }
              ]
            }
          ]}
          containerClassName="w-full py-16 lg:py-20"
          columnsClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        />
      </div>
    </ThemeProvider>
  );
}