import React, { useRef } from 'react'
import useWindowStore from '#store/Windows';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import { Draggable } from 'gsap/Draggable'



const WindowWrapper = (Component, windowKey) => {

  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex, isMaximized, isMinimized } = windows[windowKey];
    const ref = useRef(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(el, {
        scale: 0.8,
        opacity: 0,
        y: 40
      }, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.2,
        ease: "power3.out"
      });
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
        dragClickables: false, // Allow clicking interactive elements
      });

      return () => instance.kill();
    }, []);


    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen && !isMinimized ? "block" : "none";
    }, [isOpen, isMinimized]);

    const maximizeStyle = isMaximized ? {
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      transform: 'none !important',
      zIndex
    } : { zIndex };

    // When maximized, we might want to disable dragging or enforce position
    // For simplicity, we just use styles to override. 
    // Note: Draggable uses inline transform, so we might need !important in CSS or reset transform.
    // We'll use a class that enforces full size.

    return <section
      id={windowKey}
      ref={ref}
      style={maximizeStyle}
      className={`absolute ${isMaximized ? '!transform-none !w-full !h-full !top-0 !left-0' : ''}`}
    >
      <Component {...props} windowKey={windowKey} />
    </section>
  }

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;

  return Wrapped;
}

export default WindowWrapper