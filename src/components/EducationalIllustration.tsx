import React from 'react';

interface Props {
  name: string;
  className?: string;
}

export const EducationalIllustration: React.FC<Props> = ({ name, className = 'w-full h-auto' }) => {
  switch (name) {
    case 'hero-kids':
      return (
        <svg viewBox="0 0 600 400" className={className} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d8f3dc" />
              <stop offset="100%" stopColor="#FBFAF6" />
            </linearGradient>
            <linearGradient id="sunGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F2B84B" />
              <stop offset="100%" stopColor="#f39c12" />
            </linearGradient>
          </defs>
          <rect width="600" height="400" rx="24" fill="url(#skyGrad)" />
          <circle cx="480" cy="90" r="45" fill="url(#sunGrad)" opacity="0.9" />
          <path d="M 0 320 Q 180 250 360 310 T 600 290 L 600 400 L 0 400 Z" fill="#b7e4c7" />
          <path d="M 0 350 Q 220 310 440 360 T 600 340 L 600 400 L 0 400 Z" fill="#74c69d" />

          {/* School building flag and tree in background */}
          <rect x="420" y="220" width="110" height="80" rx="8" fill="#176B55" />
          <polygon points="410,220 475,170 540,220" fill="#E65100" />
          <rect x="460" y="255" width="30" height="45" rx="4" fill="#E6F4ED" />
          <line x1="475" y1="170" x2="475" y2="140" stroke="#20332E" strokeWidth="3" />
          <polygon points="475,140 500,150 475,160" fill="#F2B84B" />

          {/* Big Banyan / Neem tree */}
          <path d="M 90 350 Q 85 240 70 200 Q 130 180 150 240 Q 120 350 110 350 Z" fill="#6c584c" />
          <circle cx="95" cy="170" r="55" fill="#2d6a4f" opacity="0.9" />
          <circle cx="140" cy="180" r="45" fill="#40916c" opacity="0.95" />
          <circle cx="65" cy="190" r="40" fill="#52b788" opacity="0.9" />

          {/* Child 1: Girl with Tablet */}
          <g transform="translate(180, 210)">
            <circle cx="50" cy="35" r="22" fill="#d4a373" />
            <path d="M 28 30 Q 50 10 72 30 Q 75 45 68 50 Q 50 35 32 50 Z" fill="#1f2421" />
            <circle cx="30" cy="38" r="6" fill="#F2B84B" />
            <circle cx="70" cy="38" r="6" fill="#F2B84B" />
            <circle cx="43" cy="36" r="2.5" fill="#20332E" />
            <circle cx="57" cy="36" r="2.5" fill="#20332E" />
            <path d="M 46 44 Q 50 48 54 44" stroke="#20332E" strokeWidth="2" fill="none" strokeLinecap="round" />
            <rect x="30" y="58" width="40" height="50" rx="8" fill="#ffffff" stroke="#176B55" strokeWidth="2" />
            <polygon points="40,58 50,70 60,58" fill="#176B55" />
            <rect x="25" y="80" width="50" height="35" rx="5" fill="#20332E" />
            <rect x="28" y="83" width="44" height="29" rx="3" fill="#E6F4ED" />
            <circle cx="50" cy="97" r="8" fill="#F2B84B" />
            <path d="M 30 70 Q 20 85 28 92" stroke="#d4a373" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M 70 70 Q 80 85 72 92" stroke="#d4a373" strokeWidth="6" strokeLinecap="round" fill="none" />
          </g>

          {/* Child 2: Boy with Open Book raising hand */}
          <g transform="translate(290, 200)">
            <circle cx="50" cy="38" r="23" fill="#c68b59" />
            <path d="M 26 35 Q 50 12 74 35 Q 65 20 40 22 Z" fill="#1b1b1b" />
            <circle cx="43" cy="38" r="2.5" fill="#20332E" />
            <circle cx="57" cy="38" r="2.5" fill="#20332E" />
            <path d="M 45 47 Q 50 53 55 47" stroke="#20332E" strokeWidth="2" fill="none" strokeLinecap="round" />
            <rect x="30" y="62" width="42" height="50" rx="8" fill="#ffffff" stroke="#176B55" strokeWidth="2" />
            <polygon points="42,62 51,74 60,62" fill="#E65100" />
            <path d="M 70 70 Q 95 45 92 20" stroke="#c68b59" strokeWidth="6" strokeLinecap="round" fill="none" />
            <circle cx="92" cy="16" r="6" fill="#c68b59" />
            <polygon points="92,0 95,8 103,11 95,14 92,22 89,14 81,11 89,8" fill="#F2B84B" />
            <path d="M 30 75 Q 15 90 28 98" stroke="#c68b59" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M 10 92 Q 25 85 40 92 L 40 115 Q 25 108 10 115 Z" fill="#176B55" />
            <path d="M 40 92 Q 55 85 70 92 L 70 115 Q 55 108 40 115 Z" fill="#20876c" />
          </g>

          {/* Floating Educational Icons */}
          <g opacity="0.85">
            <rect x="130" y="100" width="45" height="30" rx="6" fill="#ffffff" stroke="#176B55" strokeWidth="1.5" />
            <text x="142" y="120" fontSize="14" fontWeight="bold" fill="#176B55">½</text>
            <rect x="230" y="80" width="40" height="30" rx="6" fill="#ffffff" stroke="#F2B84B" strokeWidth="1.5" />
            <text x="242" y="101" fontSize="16" fontWeight="bold" fill="#d99726">ಅ</text>
            <rect x="330" y="90" width="40" height="30" rx="6" fill="#ffffff" stroke="#176B55" strokeWidth="1.5" />
            <text x="343" y="111" fontSize="16" fontWeight="bold" fill="#176B55">क</text>
            <circle cx="395" cy="140" r="16" fill="#E6F4ED" stroke="#0288D1" strokeWidth="1.5" />
            <circle cx="395" cy="140" r="4" fill="#0288D1" />
            <ellipse cx="395" cy="140" rx="14" ry="5" fill="none" stroke="#0288D1" strokeWidth="1" transform="rotate(30, 395, 140)" />
            <ellipse cx="395" cy="140" rx="14" ry="5" fill="none" stroke="#0288D1" strokeWidth="1" transform="rotate(-30, 395, 140)" />
          </g>
        </svg>
      );

    case 'fraction-half':
      return (
        <svg viewBox="0 0 320 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="220" rx="16" fill="#fcfbf7" stroke="#e2dfd2" strokeWidth="1" />
          <circle cx="160" cy="100" r="75" fill="#f8e7b9" stroke="#d4a373" strokeWidth="3" />
          <path d="M 160 25 A 75 75 0 0 0 160 175 Z" fill="#176B55" opacity="0.85" />
          <line x1="160" y1="20" x2="160" y2="180" stroke="#0f4839" strokeWidth="3" strokeDasharray="4 4" />
          <rect x="40" y="85" width="65" height="30" rx="6" fill="#176B55" />
          <text x="58" y="105" fontSize="16" fontWeight="bold" fill="#ffffff">½ Part</text>
          <rect x="215" y="85" width="65" height="30" rx="6" fill="#ffffff" stroke="#d4a373" strokeWidth="1.5" />
          <text x="233" y="105" fontSize="16" fontWeight="bold" fill="#20332E">½ Part</text>
          <text x="160" y="202" textAnchor="middle" fontSize="13" fontWeight="600" fill="#176B55">
            1 Whole Roti = ½ + ½ (2 Equal Halves)
          </text>
        </svg>
      );

    case 'fraction-quarter':
      return (
        <svg viewBox="0 0 320 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="220" rx="16" fill="#fcfbf7" stroke="#e2dfd2" strokeWidth="1" />
          <circle cx="160" cy="100" r="75" fill="#f8e7b9" stroke="#d4a373" strokeWidth="3" />
          <path d="M 160 100 L 160 25 A 75 75 0 0 1 235 100 Z" fill="#F2B84B" />
          <line x1="160" y1="20" x2="160" y2="180" stroke="#0f4839" strokeWidth="2.5" />
          <line x1="80" y1="100" x2="240" y2="100" stroke="#0f4839" strokeWidth="2.5" />
          <text x="185" y="70" fontSize="14" fontWeight="bold" fill="#0f4839">¼</text>
          <text x="125" y="70" fontSize="14" fontWeight="bold" fill="#8d7256">¼</text>
          <text x="125" y="140" fontSize="14" fontWeight="bold" fill="#8d7256">¼</text>
          <text x="185" y="140" fontSize="14" fontWeight="bold" fill="#8d7256">¼</text>
          <text x="160" y="202" textAnchor="middle" fontSize="13" fontWeight="600" fill="#d99726">
            ¼ + ¼ + ¼ + ¼ = 1 Whole (4 Quarters)
          </text>
        </svg>
      );

    case 'plant-diagram':
      return (
        <svg viewBox="0 0 340 300" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="300" rx="16" fill="#f5fbf7" stroke="#c9e8d7" strokeWidth="1" />
          <rect x="0" y="200" width="340" height="100" fill="#e9dbcb" />
          <line x1="0" y1="200" x2="340" y2="200" stroke="#b08968" strokeWidth="3" />
          <text x="20" y="225" fontSize="12" fontWeight="bold" fill="#7f5539">Ground / Soil Line</text>

          {/* Roots underneath */}
          <g stroke="#8d5b4c" strokeWidth="3.5" strokeLinecap="round" fill="none">
            <path d="M 170 200 Q 170 250 170 280" />
            <path d="M 170 220 Q 140 240 120 265" strokeWidth="2.5" />
            <path d="M 170 235 Q 200 255 220 270" strokeWidth="2.5" />
            <path d="M 170 250 Q 155 270 145 285" strokeWidth="2" />
            <path d="M 170 260 Q 185 280 195 290" strokeWidth="2" />
          </g>
          <rect x="230" y="240" width="95" height="26" rx="6" fill="#8d5b4c" />
          <text x="277" y="257" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ffffff">Roots (Absorb)</text>

          {/* Stem */}
          <path d="M 167 200 L 167 70 Q 170 65 173 70 L 173 200 Z" fill="#2d6a4f" />
          <rect x="20" y="130" width="85" height="26" rx="6" fill="#2d6a4f" />
          <text x="62" y="147" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ffffff">Stem (Pipeline)</text>
          <line x1="105" y1="143" x2="165" y2="143" stroke="#2d6a4f" strokeWidth="2" strokeDasharray="3 3" />

          {/* Green Leaves */}
          <path d="M 170 140 C 130 130, 110 100, 130 90 C 150 90, 165 120, 170 140 Z" fill="#52b788" />
          <path d="M 170 115 C 210 105, 230 75, 210 65 C 190 65, 175 95, 170 115 Z" fill="#40916c" />
          <rect x="215" y="80" width="115" height="26" rx="6" fill="#40916c" />
          <text x="272" y="97" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ffffff">Leaves (Kitchen)</text>

          {/* Golden Flower at top */}
          <circle cx="170" cy="55" r="14" fill="#F2B84B" />
          <circle cx="170" cy="35" r="10" fill="#FFA826" opacity="0.9" />
          <circle cx="170" cy="75" r="10" fill="#FFA826" opacity="0.9" />
          <circle cx="150" cy="55" r="10" fill="#FFA826" opacity="0.9" />
          <circle cx="190" cy="55" r="10" fill="#FFA826" opacity="0.9" />
          <rect x="20" y="42" width="100" height="26" rx="6" fill="#FFA826" />
          <text x="70" y="59" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#20332E">Flower (Seeds)</text>
        </svg>
      );

    case 'water-cycle':
      return (
        <svg viewBox="0 0 340 240" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="240" rx="16" fill="#e8f4f8" stroke="#bcdbe8" strokeWidth="1" />
          <circle cx="280" cy="50" r="28" fill="#F2B84B" />
          <g stroke="#0288D1" strokeWidth="2.5" strokeDasharray="4 4" fill="none">
            <path d="M 220 180 Q 230 140 240 100" />
            <path d="M 260 185 Q 265 150 270 115" />
          </g>
          <text x="235" y="150" fontSize="11" fontWeight="bold" fill="#0288D1">Evaporation ↑</text>

          <path d="M 80 70 A 25 25 0 0 1 125 55 A 35 35 0 0 1 180 65 A 25 25 0 0 1 195 85 A 25 25 0 0 1 175 105 L 85 105 A 20 20 0 0 1 80 70 Z" fill="#90caf9" opacity="0.9" />
          <text x="135" y="85" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0d47a1">Condensation (Clouds)</text>

          <g stroke="#1976d2" strokeWidth="2.5" strokeLinecap="round">
            <line x1="95" y1="115" x2="90" y2="135" />
            <line x1="120" y1="120" x2="115" y2="140" />
            <line x1="145" y1="115" x2="140" y2="135" />
            <line x1="170" y1="120" x2="165" y2="140" />
          </g>
          <text x="75" y="155" fontSize="11" fontWeight="bold" fill="#1565c0">Precipitation (Rain) ↓</text>

          <path d="M 0 185 Q 120 170 200 180 T 340 175 L 340 240 L 0 240 Z" fill="#4ea5d9" />
          <text x="170" y="215" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#ffffff">Village Pond / Groundwater</text>
        </svg>
      );

    case 'panchayat-tree':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#fcf9f2" stroke="#ebdcc7" strokeWidth="1" />
          <path d="M 60 120 Q 50 40 170 30 Q 290 40 280 120 Q 240 150 170 145 Q 100 150 60 120 Z" fill="#2d6a4f" opacity="0.9" />
          <circle cx="120" cy="65" r="45" fill="#40916c" opacity="0.8" />
          <circle cx="210" cy="60" r="50" fill="#52b788" opacity="0.85" />
          <rect x="150" y="110" width="40" height="75" fill="#7f5539" rx="6" />
          <line x1="110" y1="110" x2="110" y2="170" stroke="#8d5b4c" strokeWidth="3" strokeLinecap="round" />
          <line x1="230" y1="110" x2="230" y2="170" stroke="#8d5b4c" strokeWidth="3" strokeLinecap="round" />

          <ellipse cx="170" cy="185" rx="130" ry="25" fill="#e6ccb2" stroke="#b08968" strokeWidth="2" />

          <circle cx="90" cy="180" r="10" fill="#176B55" />
          <circle cx="130" cy="190" r="10" fill="#E65100" />
          <circle cx="170" cy="192" r="12" fill="#F2B84B" />
          <circle cx="210" cy="190" r="10" fill="#176B55" />
          <circle cx="250" cy="180" r="10" fill="#7B1FA2" />

          <text x="170" y="160" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ffffff">
            Gram Sabha: Citizens Deciding Together
          </text>
        </svg>
      );

    case 'eclipse-diagram':
      return (
        <svg viewBox="0 0 340 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="200" rx="16" fill="#121820" />
          <circle cx="50" cy="100" r="35" fill="#F2B84B" />
          <text x="50" y="155" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#F2B84B">Sun</text>

          <circle cx="170" cy="100" r="14" fill="#a0aab2" stroke="#566270" strokeWidth="2" />
          <text x="170" y="140" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ffffff">Moon</text>

          <circle cx="280" cy="100" r="28" fill="#4ea5d9" stroke="#176B55" strokeWidth="2" />
          <text x="280" y="155" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#4ea5d9">Earth</text>

          <polygon points="170,86 280,95 280,105 170,114" fill="#000000" opacity="0.8" />
          <text x="225" y="93" fontSize="10" fill="#F2B84B">Umbra Shadow</text>

          <line x1="85" y1="75" x2="170" y2="86" stroke="#F2B84B" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
          <line x1="85" y1="125" x2="170" y2="114" stroke="#F2B84B" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
          <text x="170" y="30" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#ffffff">Solar Eclipse: Moon Blocks Sunlight</text>
        </svg>
      );

    case 'living-nonliving':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#f4faf6" stroke="#c2e5d3" strokeWidth="1" />
          <line x1="170" y1="20" x2="170" y2="200" stroke="#c2e5d3" strokeWidth="2" strokeDasharray="4 4" />
          {/* Left: Living */}
          <rect x="25" y="15" width="120" height="28" rx="8" fill="#176B55" />
          <text x="85" y="34" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ffffff">Living (Grow & Breathe)</text>
          <g transform="translate(45, 60)">
            {/* Tree */}
            <rect x="35" y="45" width="10" height="40" fill="#7f5539" rx="2" />
            <circle cx="40" cy="35" r="28" fill="#2d6a4f" />
            <circle cx="55" cy="40" r="22" fill="#52b788" />
            {/* Bird */}
            <circle cx="15" cy="20" r="8" fill="#E65100" />
            <polygon points="7,20 1,18 7,24" fill="#F2B84B" />
          </g>
          <text x="85" y="175" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#176B55">Neem Tree & Bird</text>
          <text x="85" y="195" textAnchor="middle" fontSize="10" fill="#577067">Needs Water & Air</text>

          {/* Right: Non-Living */}
          <rect x="195" y="15" width="120" height="28" rx="8" fill="#577067" />
          <text x="255" y="34" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ffffff">Non-Living (No Growth)</text>
          <g transform="translate(210, 60)">
            {/* Clay pot */}
            <ellipse cx="45" cy="55" rx="28" ry="32" fill="#d4a373" stroke="#b08968" strokeWidth="2" />
            <ellipse cx="45" cy="25" rx="16" ry="6" fill="#c68b59" />
            {/* River pebble */}
            <ellipse cx="20" cy="80" rx="16" ry="10" fill="#a0aab2" />
          </g>
          <text x="255" y="175" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#20332E">Clay Pot & River Pebble</text>
          <text x="255" y="195" textAnchor="middle" fontSize="10" fill="#577067">Does Not Eat or Breathe</text>
        </svg>
      );

    case 'five-senses':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#fdfaf3" stroke="#eedfc8" strokeWidth="1" />
          <text x="170" y="28" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#176B55">Our 5 Wonder Senses</text>
          <g transform="translate(20, 45)">
            {/* 1. Eyes */}
            <g transform="translate(15, 10)">
              <rect width="48" height="48" rx="12" fill="#E6F4ED" />
              <text x="24" y="32" textAnchor="middle" fontSize="22">👀</text>
              <text x="24" y="65" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#176B55">Eyes: Sight</text>
            </g>
            {/* 2. Ears */}
            <g transform="translate(75, 10)">
              <rect width="48" height="48" rx="12" fill="#E6F4ED" />
              <text x="24" y="32" textAnchor="middle" fontSize="22">👂</text>
              <text x="24" y="65" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#176B55">Ears: Sound</text>
            </g>
            {/* 3. Nose */}
            <g transform="translate(135, 10)">
              <rect width="48" height="48" rx="12" fill="#E6F4ED" />
              <text x="24" y="32" textAnchor="middle" fontSize="22">👃</text>
              <text x="24" y="65" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#176B55">Nose: Smell</text>
            </g>
            {/* 4. Tongue */}
            <g transform="translate(195, 10)">
              <rect width="48" height="48" rx="12" fill="#E6F4ED" />
              <text x="24" y="32" textAnchor="middle" fontSize="22">👅</text>
              <text x="24" y="65" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#176B55">Tongue: Taste</text>
            </g>
            {/* 5. Skin */}
            <g transform="translate(255, 10)">
              <rect width="48" height="48" rx="12" fill="#E6F4ED" />
              <text x="24" y="32" textAnchor="middle" fontSize="22">✋</text>
              <text x="24" y="65" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#176B55">Skin: Touch</text>
            </g>
          </g>
          <rect x="40" y="145" width="260" height="45" rx="12" fill="#176B55" opacity="0.9" />
          <text x="170" y="172" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ffffff">
            Helping Us Discover Nature Around Us
          </text>
        </svg>
      );

    case 'alphabet-animals':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#fdfbf7" stroke="#e8dfce" strokeWidth="1" />
          <text x="170" y="26" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#E65100">Alphabet & Phonics Sounds</text>
          <g transform="translate(25, 45)">
            <rect x="0" y="0" width="65" height="70" rx="10" fill="#fff" stroke="#E65100" strokeWidth="1.5" />
            <text x="32" y="35" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#E65100">Aa</text>
            <text x="32" y="58" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#20332E">Ant / Apple</text>

            <rect x="75" y="0" width="65" height="70" rx="10" fill="#fff" stroke="#176B55" strokeWidth="1.5" />
            <text x="107" y="35" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#176B55">Bb</text>
            <text x="107" y="58" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#20332E">Bee / Ball</text>

            <rect x="150" y="0" width="65" height="70" rx="10" fill="#fff" stroke="#0288D1" strokeWidth="1.5" />
            <text x="182" y="35" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#0288D1">Cc</text>
            <text x="182" y="58" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#20332E">Cat / Cow</text>

            <rect x="225" y="0" width="65" height="70" rx="10" fill="#fff" stroke="#F2B84B" strokeWidth="1.5" />
            <text x="257" y="35" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#d99726">Dd</text>
            <text x="257" y="58" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#20332E">Duck / Dog</text>
          </g>
          <rect x="35" y="140" width="270" height="48" rx="12" fill="#E6F4ED" stroke="#c2e5d3" strokeWidth="1" />
          <text x="170" y="162" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#176B55">
            Every letter makes a friendly sound!
          </text>
          <text x="170" y="178" textAnchor="middle" fontSize="10" fill="#577067">
            Sing along: /a/, /b/, /c/, /d/...
          </text>
        </svg>
      );

    case 'varnamala-script':
    case 'matras-script':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#fbf7ff" stroke="#decaf0" strokeWidth="1" />
          <text x="170" y="26" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#7B1FA2">
            Varnamala & Matras (ಸ್ವರಗಳು / अक्षराणि)
          </text>
          <g transform="translate(30, 45)">
            <rect x="0" y="0" width="60" height="65" rx="10" fill="#ffffff" stroke="#7B1FA2" strokeWidth="1.5" />
            <text x="30" y="38" textAnchor="middle" fontSize="26" fontWeight="bold" fill="#7B1FA2">ಅ / अ</text>
            <text x="30" y="55" textAnchor="middle" fontSize="10" fill="#577067">Sound "A"</text>

            <rect x="70" y="0" width="60" height="65" rx="10" fill="#ffffff" stroke="#7B1FA2" strokeWidth="1.5" />
            <text x="100" y="38" textAnchor="middle" fontSize="26" fontWeight="bold" fill="#7B1FA2">ಆ / आ</text>
            <text x="100" y="55" textAnchor="middle" fontSize="10" fill="#577067">Sound "Aa"</text>

            <rect x="140" y="0" width="60" height="65" rx="10" fill="#ffffff" stroke="#7B1FA2" strokeWidth="1.5" />
            <text x="170" y="38" textAnchor="middle" fontSize="26" fontWeight="bold" fill="#7B1FA2">ಇ / इ</text>
            <text x="170" y="55" textAnchor="middle" fontSize="10" fill="#577067">Sound "I"</text>

            <rect x="210" y="0" width="60" height="65" rx="10" fill="#ffffff" stroke="#7B1FA2" strokeWidth="1.5" />
            <text x="240" y="38" textAnchor="middle" fontSize="26" fontWeight="bold" fill="#7B1FA2">ಈ / ई</text>
            <text x="240" y="55" textAnchor="middle" fontSize="10" fill="#577067">Sound "Ee"</text>
          </g>
          <g transform="translate(30, 130)">
            <rect width="280" height="60" rx="12" fill="#ffffff" stroke="#e0cff5" strokeWidth="1" />
            <text x="140" y="26" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#20332E">
              ಕ್ + ಆ = ಕಾ  |  क + आ = का
            </text>
            <text x="140" y="46" textAnchor="middle" fontSize="11" fill="#7B1FA2">
              Consonant + Vowel Sign = Melodious Syllable
            </text>
          </g>
        </svg>
      );

    case 'village-home':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#fdfcf7" stroke="#e5ded0" strokeWidth="1" />
          <path d="M 0 170 Q 170 150 340 170 L 340 220 L 0 220 Z" fill="#c3d9cf" />
          {/* Thatched rural cottage roof */}
          <polygon points="50,110 170,45 290,110" fill="#d4a373" stroke="#b08968" strokeWidth="2" />
          {/* Walls */}
          <rect x="75" y="110" width="190" height="75" fill="#fdfaf3" stroke="#b08968" strokeWidth="2" />
          {/* Wooden Door */}
          <rect x="150" y="130" width="40" height="55" rx="4" fill="#7f5539" />
          <circle cx="182" cy="158" r="3" fill="#F2B84B" />
          {/* Windows */}
          <rect x="95" y="125" width="28" height="28" rx="4" fill="#b7e4c7" stroke="#7f5539" strokeWidth="2" />
          <rect x="215" y="125" width="28" height="28" rx="4" fill="#b7e4c7" stroke="#7f5539" strokeWidth="2" />
          {/* Tulsi Katte in courtyard */}
          <rect x="245" y="160" width="26" height="30" fill="#e76f51" rx="4" />
          <circle cx="258" cy="150" r="12" fill="#2d6a4f" />
          <text x="170" y="205" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#176B55">
            Peaceful Village Home & Loving Family
          </text>
        </svg>
      );

    case 'water-well':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#f0f7f9" stroke="#bfe1ec" strokeWidth="1" />
          {/* Well stone parapet */}
          <ellipse cx="170" cy="160" rx="85" ry="32" fill="#7d8597" stroke="#334155" strokeWidth="3" />
          <ellipse cx="170" cy="152" rx="72" ry="24" fill="#0288D1" />
          <text x="170" y="156" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#ffffff">Fresh Aquifer Water</text>
          {/* Stone pillars */}
          <line x1="110" y1="150" x2="110" y2="70" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
          <line x1="230" y1="150" x2="230" y2="70" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
          <line x1="100" y1="70" x2="240" y2="70" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
          {/* Pulley and rope */}
          <circle cx="170" cy="70" r="14" fill="#F2B84B" stroke="#b08968" strokeWidth="3" />
          <line x1="170" y1="84" x2="170" y2="120" stroke="#78350f" strokeWidth="2.5" />
          {/* Bucket */}
          <polygon points="160,120 180,120 176,140 164,140" fill="#b45309" />
          <text x="170" y="208" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0288D1">
            Village Step-Well: Keeping Drinking Water Pure & Covered
          </text>
        </svg>
      );

    case 'animal-habitats':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#fdfbf5" stroke="#e0d6be" strokeWidth="1" />
          <text x="170" y="24" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#176B55">Animal Habitats and Shelters</text>
          <g transform="translate(15, 40)">
            <rect x="0" y="0" width="95" height="110" rx="12" fill="#ffffff" stroke="#c2e5d3" strokeWidth="1" />
            <text x="47" y="45" textAnchor="middle" fontSize="30">🪹</text>
            <text x="47" y="75" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#176B55">Bird Nest</text>
            <text x="47" y="95" textAnchor="middle" fontSize="9" fill="#577067">Twig woven tree shelter</text>

            <rect x="105" y="0" width="95" height="110" rx="12" fill="#ffffff" stroke="#c2e5d3" strokeWidth="1" />
            <text x="152" y="45" textAnchor="middle" fontSize="30">🐝</text>
            <text x="152" y="75" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#176B55">Honeycomb</text>
            <text x="152" y="95" textAnchor="middle" fontSize="9" fill="#577067">Wax cells for honey</text>

            <rect x="210" y="0" width="95" height="110" rx="12" fill="#ffffff" stroke="#c2e5d3" strokeWidth="1" />
            <text x="257" y="45" textAnchor="middle" fontSize="30">🐇</text>
            <text x="257" y="75" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#176B55">Burrow</text>
            <text x="257" y="95" textAnchor="middle" fontSize="9" fill="#577067">Underground tunnel</text>
          </g>
          <text x="170" y="195" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#20332E">
            Every creature builds a safe home to protect its young
          </text>
        </svg>
      );

    case 'action-words':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#fdf8f4" stroke="#f0dec8" strokeWidth="1" />
          <text x="170" y="26" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#E65100">Everyday Action Words (Verbs)</text>
          <g transform="translate(25, 45)">
            <rect x="0" y="0" width="65" height="75" rx="12" fill="#ffffff" stroke="#E65100" strokeWidth="1.5" />
            <text x="32" y="38" textAnchor="middle" fontSize="26">🏃</text>
            <text x="32" y="60" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#20332E">RUN</text>

            <rect x="75" y="0" width="65" height="75" rx="12" fill="#ffffff" stroke="#176B55" strokeWidth="1.5" />
            <text x="107" y="38" textAnchor="middle" fontSize="26">🤸</text>
            <text x="107" y="60" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#20332E">JUMP</text>

            <rect x="150" y="0" width="65" height="75" rx="12" fill="#ffffff" stroke="#0288D1" strokeWidth="1.5" />
            <text x="182" y="38" textAnchor="middle" fontSize="26">📖</text>
            <text x="182" y="60" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#20332E">READ</text>

            <rect x="225" y="0" width="65" height="75" rx="12" fill="#ffffff" stroke="#7B1FA2" strokeWidth="1.5" />
            <text x="257" y="38" textAnchor="middle" fontSize="26">🎵</text>
            <text x="257" y="60" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#20332E">SING</text>
          </g>
          <rect x="35" y="145" width="270" height="45" rx="12" fill="#176B55" />
          <text x="170" y="172" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ffffff">
            Verbs show what we do every single day!
          </text>
        </svg>
      );

    case 'community-helpers':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#f4faf6" stroke="#c2e5d3" strokeWidth="1" />
          <text x="170" y="24" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#176B55">Our Village Community Helpers</text>
          <g transform="translate(15, 40)">
            <rect x="0" y="0" width="70" height="95" rx="10" fill="#fff" stroke="#176B55" strokeWidth="1" />
            <text x="35" y="36" textAnchor="middle" fontSize="24">🌾</text>
            <text x="35" y="60" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#176B55">Farmer</text>
            <text x="35" y="80" textAnchor="middle" fontSize="8" fill="#577067">Grows food</text>

            <rect x="78" y="0" width="70" height="95" rx="10" fill="#fff" stroke="#E65100" strokeWidth="1" />
            <text x="113" y="36" textAnchor="middle" fontSize="24">🏺</text>
            <text x="113" y="60" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#E65100">Potter</text>
            <text x="113" y="80" textAnchor="middle" fontSize="8" fill="#577067">Shapes clay</text>

            <rect x="156" y="0" width="70" height="95" rx="10" fill="#fff" stroke="#0288D1" strokeWidth="1" />
            <text x="191" y="36" textAnchor="middle" fontSize="24">🩺</text>
            <text x="191" y="60" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0288D1">Nurse</text>
            <text x="191" y="80" textAnchor="middle" fontSize="8" fill="#577067">Heals sickness</text>

            <rect x="234" y="0" width="70" height="95" rx="10" fill="#fff" stroke="#7B1FA2" strokeWidth="1" />
            <text x="269" y="36" textAnchor="middle" fontSize="24">👩‍🏫</text>
            <text x="269" y="60" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7B1FA2">Teacher</text>
            <text x="269" y="80" textAnchor="middle" fontSize="8" fill="#577067">Teaches wisdom</text>
          </g>
          <text x="170" y="195" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#20332E">
            Dignity of Labor: Respect All Honest Work!
          </text>
        </svg>
      );

    case 'food-chain':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#fdfaf3" stroke="#e8dfce" strokeWidth="1" />
          <text x="170" y="24" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#176B55">The Ecological Food Chain</text>
          {/* Sun */}
          <circle cx="40" cy="80" r="24" fill="#F2B84B" />
          <text x="40" y="125" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#d99726">Sun Energy</text>
          <path d="M 68 80 L 92 80" stroke="#176B55" strokeWidth="2.5" markerEnd="url(#arrow)" />

          {/* Grass Producer */}
          <rect x="98" y="55" width="50" height="50" rx="8" fill="#b7e4c7" stroke="#2d6a4f" strokeWidth="1.5" />
          <text x="123" y="85" textAnchor="middle" fontSize="20">🌱</text>
          <text x="123" y="125" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2d6a4f">Producer</text>

          <path d="M 152 80 L 176 80" stroke="#176B55" strokeWidth="2.5" />

          {/* Herbivore Deer */}
          <rect x="182" y="55" width="50" height="50" rx="8" fill="#fef5e7" stroke="#d4a373" strokeWidth="1.5" />
          <text x="207" y="85" textAnchor="middle" fontSize="20">🦌</text>
          <text x="207" y="125" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b45309">Herbivore</text>

          <path d="M 236 80 L 260 80" stroke="#176B55" strokeWidth="2.5" />

          {/* Carnivore Leopard */}
          <rect x="266" y="55" width="50" height="50" rx="8" fill="#ffebee" stroke="#c62828" strokeWidth="1.5" />
          <text x="291" y="85" textAnchor="middle" fontSize="20">🐆</text>
          <text x="291" y="125" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#c62828">Carnivore</text>

          <rect x="20" y="155" width="300" height="42" rx="10" fill="#E6F4ED" />
          <text x="170" y="180" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#176B55">
            Sunlight ➔ Green Grass ➔ Herbivore Deer ➔ Carnivore Predator
          </text>
        </svg>
      );

    case 'village-transport':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#fcfbf7" stroke="#e0d6c5" strokeWidth="1" />
          <text x="170" y="24" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#176B55">Rural Transportation Networks</text>
          <g transform="translate(25, 45)">
            <rect x="0" y="0" width="85" height="95" rx="12" fill="#fff" stroke="#d4a373" strokeWidth="1.5" />
            <text x="42" y="42" textAnchor="middle" fontSize="28">🐂</text>
            <text x="42" y="70" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#20332E">Bullock Cart</text>
            <text x="42" y="85" textAnchor="middle" fontSize="9" fill="#577067">Farm field to mandi</text>

            <rect x="100" y="0" width="85" height="95" rx="12" fill="#fff" stroke="#176B55" strokeWidth="1.5" />
            <text x="142" y="42" textAnchor="middle" fontSize="28">🚲</text>
            <text x="142" y="70" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#20332E">Bicycle</text>
            <text x="142" y="85" textAnchor="middle" fontSize="9" fill="#577067">Clean zero-smoke</text>

            <rect x="200" y="0" width="85" height="95" rx="12" fill="#fff" stroke="#0288D1" strokeWidth="1.5" />
            <text x="242" y="42" textAnchor="middle" fontSize="28">🚌</text>
            <text x="242" y="70" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#20332E">State Bus</text>
            <text x="242" y="85" textAnchor="middle" fontSize="9" fill="#577067">Town connection</text>
          </g>
          <text x="170" y="195" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#176B55">
            Connecting villages to schools, clinics, and district markets
          </text>
        </svg>
      );

    case 'measurement-tools':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#f0faf4" stroke="#c2e5d3" strokeWidth="1" />
          <text x="170" y="24" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#176B55">Standard Metric Measurement Units</text>
          <g transform="translate(15, 40)">
            {/* Volume */}
            <rect x="0" y="0" width="95" height="110" rx="10" fill="#fff" stroke="#176B55" strokeWidth="1" />
            <text x="47" y="38" textAnchor="middle" fontSize="26">🥛</text>
            <text x="47" y="65" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#176B55">Volume</text>
            <text x="47" y="82" textAnchor="middle" fontSize="10" fill="#20332E">Litres (L)</text>
            <text x="47" y="98" textAnchor="middle" fontSize="8" fill="#577067">1 L = 1000 mL</text>

            {/* Length */}
            <rect x="105" y="0" width="95" height="110" rx="10" fill="#fff" stroke="#0288D1" strokeWidth="1" />
            <text x="152" y="38" textAnchor="middle" fontSize="26">📏</text>
            <text x="152" y="65" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0288D1">Length</text>
            <text x="152" y="82" textAnchor="middle" fontSize="10" fill="#20332E">Metres (m)</text>
            <text x="152" y="98" textAnchor="middle" fontSize="8" fill="#577067">1 m = 100 cm</text>

            {/* Mass */}
            <rect x="210" y="0" width="95" height="110" rx="10" fill="#fff" stroke="#E65100" strokeWidth="1" />
            <text x="257" y="38" textAnchor="middle" fontSize="26">⚖️</text>
            <text x="257" y="65" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#E65100">Weight</text>
            <text x="257" y="82" textAnchor="middle" fontSize="10" fill="#20332E">Kilograms (kg)</text>
            <text x="257" y="98" textAnchor="middle" fontSize="8" fill="#577067">1 kg = 1000 g</text>
          </g>
          <text x="170" y="195" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#20332E">
            Standard units give accurate, fair trade across the country
          </text>
        </svg>
      );

    case 'plant-kitchen':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#f4faf5" stroke="#c2e5d3" strokeWidth="1" />
          <circle cx="45" cy="45" r="22" fill="#F2B84B" />
          <text x="45" y="49" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#78350f">Sunlight</text>
          {/* Green Leaf */}
          <path d="M 80 140 C 90 40, 240 50, 270 110 C 230 180, 110 180, 80 140 Z" fill="#40916c" stroke="#176B55" strokeWidth="3" />
          <line x1="80" y1="140" x2="260" y2="115" stroke="#2d6a4f" strokeWidth="3" />
          {/* Influx arrows */}
          <text x="100" y="70" fontSize="11" fontWeight="bold" fill="#0288D1">CO₂ from Air ➔</text>
          <text x="60" y="185" fontSize="11" fontWeight="bold" fill="#0288D1">Water from Roots ➔</text>
          {/* Outflux */}
          <rect x="195" y="80" width="125" height="50" rx="8" fill="#ffffff" stroke="#176B55" strokeWidth="1.5" />
          <text x="257" y="100" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#176B55">Output Produced:</text>
          <text x="257" y="118" textAnchor="middle" fontSize="10" fill="#20332E">Glucose (Food) + Oxygen 💨</text>
          <text x="170" y="205" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#176B55">
            Photosynthesis: Nature’s Solar Kitchen
          </text>
        </svg>
      );

    case 'map-compass':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#fbf9f4" stroke="#e0d7c2" strokeWidth="1" />
          {/* Compass Circle */}
          <circle cx="170" cy="105" r="75" fill="#ffffff" stroke="#176B55" strokeWidth="2" />
          {/* North Star pointer */}
          <polygon points="170,35 178,105 170,100" fill="#c62828" />
          <polygon points="170,35 162,105 170,100" fill="#e53935" />
          {/* South */}
          <polygon points="170,175 178,105 170,110" fill="#546e7a" />
          <polygon points="170,175 162,105 170,110" fill="#78909c" />
          {/* East */}
          <polygon points="240,105 170,113 175,105" fill="#F2B84B" />
          {/* West */}
          <polygon points="100,105 170,97 165,105" fill="#F2B84B" />
          {/* Labels */}
          <text x="170" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#c62828">N (North)</text>
          <text x="170" y="196" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#546e7a">S (South)</text>
          <text x="268" y="110" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#b45309">E (East - Sunrise)</text>
          <text x="70" y="110" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#b45309">W (West - Sunset)</text>
        </svg>
      );

    case 'haat-market':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#fdfbf6" stroke="#ded4c0" strokeWidth="1" />
          {/* Canopy awning */}
          <polygon points="40,65 170,25 300,65" fill="#E65100" />
          <rect x="50" y="65" width="240" height="15" fill="#F2B84B" />
          {/* Wooden stall counter */}
          <rect x="60" y="80" width="220" height="70" fill="#d4a373" stroke="#8d5b4c" strokeWidth="2" rx="4" />
          {/* Weighing scale */}
          <g transform="translate(130, 90)">
            <line x1="40" y1="0" x2="40" y2="45" stroke="#20332E" strokeWidth="3" />
            <line x1="10" y1="10" x2="70" y2="10" stroke="#20332E" strokeWidth="3" />
            <ellipse cx="15" cy="30" rx="16" ry="6" fill="#F2B84B" />
            <ellipse cx="65" cy="30" rx="16" ry="6" fill="#F2B84B" />
          </g>
          {/* Rupee Coin Badge */}
          <circle cx="95" cy="120" r="16" fill="#176B55" />
          <text x="95" y="126" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#ffffff">₹</text>
          <rect x="40" y="170" width="260" height="38" rx="10" fill="#E6F4ED" />
          <text x="170" y="193" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#176B55">
            Weekly Village Haat: Decimals, Money & Fair Trade
          </text>
        </svg>
      );

    case 'forest-wildlife':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#f2f9f5" stroke="#bfe2d0" strokeWidth="1" />
          {/* Forest canopy */}
          <circle cx="80" cy="90" r="45" fill="#2d6a4f" opacity="0.9" />
          <circle cx="130" cy="70" r="50" fill="#40916c" opacity="0.95" />
          <circle cx="180" cy="85" r="45" fill="#52b788" opacity="0.9" />
          <circle cx="230" cy="70" r="48" fill="#2d6a4f" opacity="0.95" />
          <circle cx="275" cy="95" r="40" fill="#40916c" opacity="0.9" />
          <rect x="0" y="140" width="340" height="80" fill="#7f5539" />
          <path d="M 0 160 Q 170 145 340 160 L 340 220 L 0 220 Z" fill="#e9dbcb" />
          {/* Groundwater recharge percolation arrows */}
          <g stroke="#0288D1" strokeWidth="2" strokeDasharray="3 3">
            <line x1="100" y1="165" x2="100" y2="195" />
            <line x1="170" y1="165" x2="170" y2="195" />
            <line x1="240" y1="165" x2="240" y2="195" />
          </g>
          <text x="170" y="208" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0288D1">
            Forest Roots Recharge Village Groundwater & Aquifers
          </text>
        </svg>
      );

    case 'electric-circuit':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#1b242c" />
          {/* Battery */}
          <rect x="40" y="85" width="45" height="50" rx="6" fill="#e53935" stroke="#ffffff" strokeWidth="1.5" />
          <rect x="48" y="77" width="12" height="8" rx="2" fill="#d4af37" />
          <text x="62" y="115" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#ffffff">3V Cell</text>
          {/* Copper Wires */}
          <path d="M 62 77 L 62 40 L 170 40" stroke="#d97706" strokeWidth="3" fill="none" />
          {/* Switch */}
          <circle cx="170" cy="40" r="4" fill="#ffffff" />
          <line x1="170" y1="40" x2="200" y2="40" stroke="#F2B84B" strokeWidth="4" />
          <circle cx="200" cy="40" r="4" fill="#ffffff" />
          <text x="185" y="28" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#F2B84B">Closed Switch</text>
          <path d="M 200 40 L 280 40 L 280 90" stroke="#d97706" strokeWidth="3" fill="none" />
          {/* Glowing Bulb */}
          <circle cx="280" cy="115" r="24" fill="#F2B84B" opacity="0.35" />
          <circle cx="280" cy="115" r="16" fill="#F2B84B" />
          <text x="280" y="120" textAnchor="middle" fontSize="16">💡</text>
          <text x="280" y="152" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#F2B84B">Glowing Bulb</text>
          {/* Return wire */}
          <path d="M 280 135 L 280 180 L 62 180 L 62 135" stroke="#d97706" strokeWidth="3" fill="none" />
          <text x="170" y="205" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#ffffff">
            Closed Electric Circuit: Current Flows in an Unbroken Loop
          </text>
        </svg>
      );

    case 'ratios-field':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#fdfbf7" stroke="#e0d6c5" strokeWidth="1" />
          <text x="170" y="26" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#176B55">Farm Land Area & Proportion (3 : 2)</text>
          {/* 5-acre rectangle split 3:2 */}
          <rect x="40" y="50" width="156" height="110" rx="4" fill="#52b788" stroke="#176B55" strokeWidth="2" />
          <text x="118" y="100" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ffffff">Plot A: 3 Parts</text>
          <text x="118" y="120" textAnchor="middle" fontSize="11" fill="#f0fff4">3 Acres (Paddy)</text>

          <rect x="196" y="50" width="104" height="110" rx="4" fill="#F2B84B" stroke="#b45309" strokeWidth="2" />
          <text x="248" y="100" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#20332E">Plot B: 2 Parts</text>
          <text x="248" y="120" textAnchor="middle" fontSize="11" fill="#78350f">2 Acres (Millet)</text>

          <text x="170" y="185" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#176B55">
            Total Area = 5 Acres | Ratio = 3 : 2 | Total Parts = 5
          </text>
          <text x="170" y="204" textAnchor="middle" fontSize="10" fill="#577067">
            Area = Length × Breadth (Square Metres / Hectares)
          </text>
        </svg>
      );

    case 'monsoon-climate':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#eaf4f8" stroke="#bedbe8" strokeWidth="1" />
          <text x="170" y="24" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0288D1">Southwest Monsoon & Kharif Season</text>
          {/* Rain clouds */}
          <g fill="#78909c" opacity="0.95">
            <ellipse cx="110" cy="65" rx="45" ry="25" />
            <ellipse cx="150" cy="55" rx="55" ry="32" />
            <ellipse cx="205" cy="65" rx="50" ry="26" />
          </g>
          {/* Rain streaks */}
          <g stroke="#1976d2" strokeWidth="2.5" strokeLinecap="round">
            <line x1="90" y1="105" x2="80" y2="135" />
            <line x1="125" y1="105" x2="115" y2="135" />
            <line x1="160" y1="105" x2="150" y2="135" />
            <line x1="195" y1="105" x2="185" y2="135" />
            <line x1="230" y1="105" x2="220" y2="135" />
          </g>
          {/* Lush Green Fields */}
          <path d="M 0 150 Q 170 135 340 150 L 340 220 L 0 220 Z" fill="#40916c" />
          <text x="170" y="185" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ffffff">
            Kharif Crops Sown: Paddy, Maize, Cotton & Soybean
          </text>
          <text x="170" y="205" textAnchor="middle" fontSize="10" fill="#E6F4ED">
            Monsoon brings 75% of Indian rainfall
          </text>
        </svg>
      );

    case 'ancient-architecture':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#fbf7ef" stroke="#ded0b6" strokeWidth="1" />
          {/* Historic stone structure / Gopuram / Chariot */}
          <g transform="translate(60, 40)">
            <polygon points="105,10 75,45 135,45" fill="#c68b59" stroke="#8d5b4c" strokeWidth="2" />
            <polygon points="105,45 60,85 150,85" fill="#d4a373" stroke="#8d5b4c" strokeWidth="2" />
            <rect x="40" y="85" width="130" height="50" fill="#e6ccb2" stroke="#8d5b4c" strokeWidth="2" rx="4" />
            {/* Chariot Stone Wheels */}
            <circle cx="65" cy="135" r="22" fill="#7f5539" stroke="#3d2618" strokeWidth="3" />
            <circle cx="65" cy="135" r="6" fill="#F2B84B" />
            <circle cx="145" cy="135" r="22" fill="#7f5539" stroke="#3d2618" strokeWidth="3" />
            <circle cx="145" cy="135" r="6" fill="#F2B84B" />
          </g>
          <text x="170" y="200" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#7f5539">
            Hampi Stone Chariot & Medieval Irrigation Engineering
          </text>
        </svg>
      );

    case 'solar-energy':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#f2faf6" stroke="#c2e5d3" strokeWidth="1" />
          <circle cx="280" cy="50" r="26" fill="#F2B84B" />
          <text x="280" y="55" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#78350f">Sun</text>
          {/* Photovoltaic Solar Panel */}
          <polygon points="50,110 130,55 210,55 130,110" fill="#0d47a1" stroke="#ffffff" strokeWidth="2" />
          <line x1="90" y1="82" x2="170" y2="82" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="90" y1="82" x2="130" y2="55" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="130" y1="110" x2="170" y2="82" stroke="#ffffff" strokeWidth="1.5" />
          {/* Stand */}
          <line x1="90" y1="110" x2="90" y2="150" stroke="#475569" strokeWidth="5" />
          <line x1="170" y1="110" x2="170" y2="150" stroke="#475569" strokeWidth="5" />
          {/* Biogas Dome */}
          <ellipse cx="260" cy="150" rx="45" ry="25" fill="#7f5539" stroke="#4a301e" strokeWidth="2" />
          <line x1="260" y1="125" x2="260" y2="105" stroke="#176B55" strokeWidth="3" />
          <text x="260" y="100" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#176B55">Methane Gas ♨️</text>
          <text x="170" y="185" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#176B55">
            Renewable Solar Energy & Rural Biogas Digesters
          </text>
          <text x="170" y="205" textAnchor="middle" fontSize="10" fill="#577067">
            Clean, zero-emission independent village electricity
          </text>
        </svg>
      );

    case 'indian-constitution':
      return (
        <svg viewBox="0 0 340 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="220" rx="16" fill="#fdfcf7" stroke="#e0d6c0" strokeWidth="1" />
          {/* Tricolour Header Band */}
          <rect x="0" y="0" width="340" height="10" fill="#FF9933" rx="4" />
          <rect x="0" y="10" width="340" height="8" fill="#ffffff" />
          <rect x="0" y="18" width="340" height="10" fill="#138808" />

          {/* Book of Constitution */}
          <rect x="75" y="40" width="190" height="125" rx="8" fill="#1a365d" stroke="#d4af37" strokeWidth="3" />
          {/* Gold embossed border */}
          <rect x="85" y="50" width="170" height="105" rx="4" fill="none" stroke="#d4af37" strokeWidth="1" strokeDasharray="3 3" />
          {/* Ashoka Chakra */}
          <circle cx="170" cy="85" r="18" fill="none" stroke="#d4af37" strokeWidth="2" />
          <circle cx="170" cy="85" r="3" fill="#d4af37" />
          <text x="170" y="120" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#d4af37">
            CONSTITUTION OF INDIA
          </text>
          <text x="170" y="136" textAnchor="middle" fontSize="10" fill="#ffffff">
            WE, THE PEOPLE OF INDIA
          </text>

          <text x="170" y="190" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#176B55">
            Justice, Liberty, Equality, and Fraternity
          </text>
          <text x="170" y="206" textAnchor="middle" fontSize="10" fill="#577067">
            Fundamental Rights & Duties of Every Citizen
          </text>
        </svg>
      );

    default:
      return (
        <div className={`p-6 rounded-2xl bg-[#E6F4ED] border border-[#c2e5d3] flex items-center justify-center text-[#176B55] font-medium ${className}`}>
          <span>Educational Illustration: {name}</span>
        </div>
      );
  }
};
