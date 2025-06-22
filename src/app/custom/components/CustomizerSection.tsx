'use client';
// ====== components/CustomizerSection.tsx ======
import React, { useCallback, useEffect, useRef, useState } from 'react';

const CustomizerSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [signText, setSignText] = useState('Steffens');
  const [fontStyle, setFontStyle] = useState('serif');
  const [woodMaterial, setWoodMaterial] = useState('#D2B48C'); // Oak color
  const [signShape, setSignShape] = useState('rectangle');
  const [engravingColor, setEngravingColor] = useState('#402E32'); // Deep Brown

  const drawSign = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background/material
    ctx.fillStyle = woodMaterial;
    if (signShape === 'rectangle') {
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else if (signShape === 'ellipse') {
      ctx.beginPath();
      ctx.ellipse(canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height / 2, 0, 0, 2 * Math.PI);
      ctx.fill();
    }
    
    // Draw wood grain pattern (simplified)
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.lineWidth = 1;
    for(let i=0; i<canvas.height; i+=4) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.bezierCurveTo(canvas.width/3, i+Math.random()*10-5, 2*canvas.width/3, i+Math.random()*10-5, canvas.width, i);
        ctx.stroke();
    }

    // Draw text
    ctx.fillStyle = engravingColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    let fontSize = 60;
    ctx.font = `${fontSize}px ${fontStyle === 'serif' ? 'Playfair Display' : fontStyle === 'sans-serif' ? 'Inter' : 'Courier New'}`;

    while (ctx.measureText(signText).width > canvas.width - 40 && fontSize > 10) {
      fontSize--;
      ctx.font = `${fontSize}px ${fontStyle === 'serif' ? 'Playfair Display' : fontStyle === 'sans-serif' ? 'Inter' : 'Courier New'}`;
    }

    // Simulate engraving with a slight shadow
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 2;

    ctx.fillText(signText, canvas.width / 2, canvas.height / 2);

    // Reset shadow
    ctx.shadowColor = 'transparent';
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
  }, [signText, fontStyle, woodMaterial, signShape, engravingColor]);

  useEffect(() => {
    drawSign();
  }, [drawSign]);

  return (
    <section id="customizer" className="py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="section-title">Interactive Product Customizer</h2>
        <p className="section-subtitle">This is a demonstration of how you could visualize your custom sign in real-time. Use the controls to design your piece and see the preview update instantly. This interactive experience helps ensure the final product is exactly what you envision.</p>
        <div className="card md:flex p-4 md:p-8 gap-8">
          <div className="w-full md:w-2/3 bg-gray-200 rounded-lg flex items-center justify-center p-4 aspect-video md:aspect-auto">
            <canvas ref={canvasRef} width="600" height="300" className="w-full h-auto rounded-md shadow-inner bg-white"></canvas>
          </div>
          <div className="w-full md:w-1/3 mt-6 md:mt-0 text-left space-y-4">
            <div>
              <label htmlFor="sign-text" className="block font-bold mb-1">Your Text:</label>
              <input
                type="text"
                id="sign-text"
                value={signText}
                onChange={(e) => setSignText(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-muted-terracotta"
              />
            </div>
            <div>
              <label htmlFor="font-select" className="block font-bold mb-1">Font Style:</label>
              <select
                id="font-select"
                value={fontStyle}
                onChange={(e) => setFontStyle(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="serif">Playfair Display</option>
                <option value="sans-serif">Inter</option>
                <option value="monospace">Courier New</option>
              </select>
            </div>
            <div>
              <label htmlFor="material-select" className="block font-bold mb-1">Wood Material:</label>
              <select
                id="material-select"
                value={woodMaterial}
                onChange={(e) => setWoodMaterial(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="#D2B48C">Oak</option>
                <option value="#8B4513">Walnut</option>
                <option value="#DEB887">Maple</option>
              </select>
            </div>
            <div>
              <label htmlFor="shape-select" className="block font-bold mb-1">Sign Shape:</label>
              <select
                id="shape-select"
                value={signShape}
                onChange={(e) => setSignShape(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="rectangle">Rectangle</option>
                <option value="ellipse">Ellipse</option>
              </select>
            </div>
            <div>
              <label htmlFor="text-color" className="block font-bold mb-1">Engraving Color:</label>
              <input
                type="color"
                id="text-color"
                value={engravingColor}
                onChange={(e) => setEngravingColor(e.target.value)}
                className="w-full p-1 h-10 border rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizerSection;
