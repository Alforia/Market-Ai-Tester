import React, { useEffect } from 'react';
import anime from 'animejs';
import './MeshGradientBackground.css';

const MeshGradientBackground = () => {
  useEffect(() => {
    const animateBackground = () => {
      anime({
        targets: '.gradient-circle',
        translateX: () => anime.random(-250, 550),
        translateY: () => anime.random(-250, 550),
        easing: 'easeInOutQuad',
        duration: 6000,
        complete: animateBackground,
      });
    };
    animateBackground();
  }, []);

  return (
    <div className="mesh-background">
      <div className="gradient-circle circle1"></div>
      <div className="gradient-circle circle2"></div>
      <div className="gradient-circle circle3"></div>
      <div className="gradient-circle circle4"></div>
    </div>
  );
};

export default MeshGradientBackground;
