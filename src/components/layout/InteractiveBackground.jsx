import { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    const mouse = { x: -1000, y: -1000, radius: 200 };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    class Star {
      constructor(x, y, size, baseSpeed, color, depth) {
        this.baseX = x;
        this.baseY = y;
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = baseSpeed * (size * 0.5); // Parallax effect
        this.color = color;
        this.depth = depth;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.twinkleAngle = Math.random() * Math.PI * 2;
      }

      draw() {
        ctx.beginPath();
        const currentOpacity = (this.opacity + Math.sin(this.twinkleAngle) * 0.15) * 0.6; // Reduced contrast
        ctx.fillStyle = `rgba(167, 243, 148, ${currentOpacity})`;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Soft glow for larger stars
        if (this.size > 1.2) {
            ctx.shadowBlur = 8;
            ctx.shadowColor = 'rgba(167, 243, 148, 0.3)';
        } else {
            ctx.shadowBlur = 0;
        }
      }

      update() {
        // Continuous movement
        this.baseX += this.speed;
        if (this.baseX > canvas.width) this.baseX = 0;
        if (this.baseX < 0) this.baseX = canvas.width;

        // Interaction
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let force = (mouse.radius - distance) / mouse.radius;
        
        if (distance < mouse.radius) {
          this.x -= (dx / distance) * force * 5;
          this.y -= (dy / distance) * force * 5;
        } else {
            // Smoothly return to base motion
            this.x += (this.baseX - this.x) * 0.05;
            this.y += (this.baseY - this.y) * 0.05;
        }

        this.twinkleAngle += this.twinkleSpeed;
        this.draw();
      }
    }

    function init() {
      stars = [];
      const numberOfStars = (canvas.width * canvas.height) / 7000;
      for (let i = 0; i < numberOfStars; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let size = Math.random() * 2 + 0.2; // Stars of different sizes
        let speed = Math.random() * 0.2 + 0.05; // Different speeds
        stars.push(new Star(x, y, size, speed, '#8eff71', size));
      }
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        stars[i].update();
      }
    }

    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default InteractiveBackground;
