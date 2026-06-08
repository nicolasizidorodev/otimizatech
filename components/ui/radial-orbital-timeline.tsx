"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Check } from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  deliverables: string[];
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  containerClassName?: string;
  theme?: "dark" | "light";
}

export default function RadialOrbitalTimeline({
  timelineData,
  containerClassName,
  theme = "dark",
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [viewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(600);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const isLight = theme === "light";

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) newState[parseInt(key)] = false;
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const newPulseEffect: Record<number, boolean> = {};
        getRelatedItems(id).forEach((relId) => { newPulseEffect[relId] = true; });
        setPulseEffect(newPulseEffect);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    setContainerWidth(containerRef.current.offsetWidth);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;
    if (mounted && autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
      }, 50);
    }
    return () => { if (rotationTimer) clearInterval(rotationTimer); };
  }, [mounted, autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    setRotationAngle(270 - (nodeIndex / timelineData.length) * 360);
  };

  // Responsive sizing derived from container width
  const orbitRadius = containerWidth < 380 ? 115 : containerWidth < 540 ? 145 : 190;
  const nodeSize   = orbitRadius < 125 ? 40 : orbitRadius < 160 ? 46 : 56;   // px
  const iconSize   = nodeSize < 44 ? 17 : nodeSize < 50 ? 20 : 24;
  const labelFontSize = nodeSize < 44 ? "0.7rem" : nodeSize < 50 ? "0.75rem" : "0.875rem";
  const centerMain  = Math.round(orbitRadius * 0.48);   // orange ring
  const centerCore  = Math.round(centerMain * 0.46);    // white inner
  const orbitRingPx = orbitRadius * 2;
  const expandedCardWidth = Math.min(280, Math.round(containerWidth * 0.82));

  // Premium card palette (theme-aware)
  const card = isLight
    ? {
        bg: "rgba(255,255,255,0.98)",
        border: "1px solid rgba(15,23,42,0.07)",
        shadow: "0 24px 50px -12px rgba(15,23,42,0.18), 0 6px 16px rgba(15,23,42,0.06)",
        title: "#0F172A",
        desc: "rgba(15,23,42,0.60)",
        deliverable: "rgba(15,23,42,0.80)",
        divider: "rgba(15,23,42,0.08)",
        muted: "rgba(15,23,42,0.45)",
        connector: "rgba(15,23,42,0.18)",
      }
    : {
        bg: "rgba(10,12,16,0.92)",
        border: "1px solid rgba(255,255,255,0.12)",
        shadow: "0 24px 50px -12px rgba(0,0,0,0.6)",
        title: "#FFFFFF",
        desc: "rgba(255,255,255,0.70)",
        deliverable: "rgba(255,255,255,0.88)",
        divider: "rgba(255,255,255,0.10)",
        muted: "rgba(255,255,255,0.50)",
        connector: "rgba(255,255,255,0.40)",
      };
  const accent = "#FF6B00";

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;
    const x = orbitRadius * Math.cos(radian) + centerOffset.x;
    const y = orbitRadius * Math.sin(radian) + centerOffset.y;
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    return { x, y, angle, zIndex };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const item = timelineData.find((i) => i.id === itemId);
    return item ? item.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getNodeCircleStyle = (isExpanded: boolean, isRelated: boolean) => {
    if (isLight) {
      if (isExpanded) return {
        background: "#14181F", color: "white",
        border: "2px solid #14181F",
        boxShadow: "0 8px 20px rgba(20,24,31,0.25)",
        transform: "scale(1.5)",
      };
      if (isRelated) return {
        background: "#FFFFFF", color: "#FF6B00",
        border: "1.5px solid rgba(255,122,0,0.4)",
        boxShadow: "0 12px 28px rgba(255,122,0,0.18), 0 2px 8px rgba(0,0,0,0.05)",
      };
      return {
        background: "#FFFFFF", color: "#FF6B00",
        border: "1px solid rgba(255,167,0,0.12)",
        boxShadow: "0 14px 34px rgba(15,23,42,0.14), 0 5px 12px rgba(15,23,42,0.08), 0 1px 2px rgba(15,23,42,0.04)",
      };
    }
    // dark theme
    if (isExpanded) return {
      background: "white", color: "black",
      border: "2px solid white",
      boxShadow: "0 8px 20px rgba(255,255,255,0.25)",
      transform: "scale(1.5)",
    };
    if (isRelated) return {
      background: "rgba(255,255,255,0.5)", color: "black",
      border: "2px solid white",
    };
    return {
      background: "black", color: "white",
      border: "2px solid rgba(255,255,255,0.4)",
    };
  };

  const getLabelStyle = (isExpanded: boolean) => {
    if (isLight) return {
      color: isExpanded ? "#FF6B00" : "#0F172A",
      fontWeight: 700,
      textShadow: "0 1px 2px rgba(255,255,255,0.9)",
      transform: isExpanded ? "scale(1.25)" : undefined,
      transformOrigin: "center top",
    };
    return {
      color: isExpanded ? "white" : "rgba(255,255,255,0.9)",
      fontWeight: 700,
      transform: isExpanded ? "scale(1.25)" : undefined,
      transformOrigin: "center top",
    };
  };

  return (
    <div
      className={containerClassName ?? "w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden"}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Center hub */}
          <div className="absolute flex items-center justify-center z-10" style={{ width: 0, height: 0 }}>
            {/* Ambient glow */}
            <div
              className="absolute rounded-full"
              style={{
                width: `${orbitRadius * 1.37}px`,
                height: `${orbitRadius * 1.37}px`,
                background: isLight
                  ? "radial-gradient(circle, rgba(255,122,0,0.18) 0%, rgba(255,122,0,0.05) 38%, rgba(255,122,0,0) 62%)"
                  : "radial-gradient(circle, rgba(255,122,0,0.22) 0%, rgba(255,122,0,0.06) 42%, rgba(255,122,0,0) 65%)",
              }}
            />
            {/* Slow pulse rings */}
            <div
              className="absolute rounded-full animate-ping"
              style={{
                width: `${centerMain + 36}px`,
                height: `${centerMain + 36}px`,
                border: "1.5px solid rgba(255,122,0,0.28)",
                animationDuration: "3.5s",
              }}
            />
            <div
              className="absolute rounded-full animate-ping"
              style={{
                width: `${centerMain + 20}px`,
                height: `${centerMain + 20}px`,
                border: "1.5px solid rgba(255,122,0,0.2)",
                animationDuration: "3.5s",
                animationDelay: "1.3s",
              }}
            />
            {/* Static halo ring */}
            <div
              className="absolute rounded-full"
              style={{
                width: `${centerMain + 24}px`,
                height: `${centerMain + 24}px`,
                border: "1px solid rgba(255,122,0,0.22)",
                boxShadow: "inset 0 0 24px rgba(255,122,0,0.08)",
              }}
            />
            {/* Main orange ring */}
            <div
              className="absolute rounded-full animate-pulse flex items-center justify-center"
              style={{
                width: `${centerMain}px`,
                height: `${centerMain}px`,
                background: "linear-gradient(135deg, #FF9E00 0%, #FF6B00 55%, #FF5500 100%)",
                boxShadow:
                  "0 14px 40px rgba(255,107,0,0.45), 0 4px 14px rgba(255,85,0,0.35), inset 0 2px 6px rgba(255,255,255,0.4)",
                animationDuration: "4s",
              }}
            >
              {/* White inner core */}
              <div
                className="rounded-full"
                style={{
                  width: `${centerCore}px`,
                  height: `${centerCore}px`,
                  background:
                    "radial-gradient(circle at 35% 30%, #FFFFFF 0%, #F8FAFC 70%, #EEF2F6 100%)",
                  boxShadow: "inset 0 2px 6px rgba(0,0,0,0.08), 0 2px 10px rgba(0,0,0,0.12)",
                }}
              />
            </div>
          </div>

          {/* Orbit ring */}
          <div
            className="absolute rounded-full"
            style={{
              width: `${orbitRingPx}px`,
              height: `${orbitRingPx}px`,
              border: isLight
                ? "1.5px solid rgba(15,23,42,0.10)"
                : "1.5px solid rgba(255,255,255,0.16)",
              background: isLight
                ? "radial-gradient(circle, rgba(255,255,255,0) 64%, rgba(255,255,255,0.5) 100%)"
                : "transparent",
              boxShadow: isLight
                ? "0 2px 8px rgba(15,23,42,0.04)"
                : "inset 0 0 60px rgba(255,122,0,0.06)",
            }}
          />

          {mounted && timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;
            const nextItem = timelineData[index + 1];

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: 1,
                }}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
              >
                {/* Glow halo — only when actively related/pulsing, never on idle orbs */}
                {isPulsing && (
                  <div
                    className="absolute rounded-full animate-pulse"
                    style={{
                      background: isLight
                        ? `radial-gradient(circle, rgba(255,107,0,0.22) 0%, rgba(255,107,0,0) 70%)`
                        : `radial-gradient(circle, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 70%)`,
                      width: `${item.energy * 0.5 + nodeSize + 8}px`,
                      height: `${item.energy * 0.5 + nodeSize + 8}px`,
                      left: `calc(${nodeSize / 2}px - ${(item.energy * 0.5 + nodeSize + 8) / 2}px)`,
                      top: `calc(${nodeSize / 2}px - ${(item.energy * 0.5 + nodeSize + 8) / 2}px)`,
                    }}
                  />
                )}

                {/* Node circle */}
                <div
                  className="rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ ...getNodeCircleStyle(isExpanded, isRelated), width: `${nodeSize}px`, height: `${nodeSize}px` }}
                >
                  <Icon size={iconSize} strokeWidth={2.2} />
                </div>

                {/* Label */}
                <div
                  className="absolute font-bold tracking-wide transition-all duration-300 whitespace-nowrap"
                  style={{ ...getLabelStyle(isExpanded), fontSize: labelFontSize, top: `${nodeSize + 8}px`, left: "50%", transform: `translateX(-50%) ${getLabelStyle(isExpanded).transform ?? ""}` }}
                >
                  {item.title}
                </div>

                {/* Expanded card */}
                {isExpanded && (
                  <div style={{
                    position: "absolute",
                    top: `${nodeSize + 20}px`,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: `${expandedCardWidth}px`,
                    background: card.bg,
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: card.border,
                    boxShadow: card.shadow,
                    borderRadius: "16px",
                    overflow: "visible",
                    zIndex: 300,
                  }}>
                    {/* Connector line */}
                    <div style={{
                      position: "absolute",
                      top: "-12px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "1px",
                      height: "12px",
                      background: card.connector,
                    }} />

                    {/* Header — icon chip + eyebrow + step name */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "18px 18px 0" }}>
                      <div style={{
                        flexShrink: 0,
                        width: "38px",
                        height: "38px",
                        borderRadius: "11px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(255,107,0,0.10)",
                        border: "1px solid rgba(255,107,0,0.18)",
                        color: accent,
                      }}>
                        <Icon size={20} strokeWidth={2.1} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: accent,
                        }}>
                          {item.category}
                        </div>
                        <p style={{ fontSize: "16px", fontWeight: 700, marginTop: "2px", color: card.title, lineHeight: 1.2 }}>
                          {item.title}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div style={{ padding: "12px 18px 0" }}>
                      <p style={{ fontSize: "13px", lineHeight: 1.6, color: card.desc, margin: 0 }}>
                        {item.content}
                      </p>
                    </div>

                    {/* Deliverables */}
                    <div style={{ padding: "16px 18px 0" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                        {item.deliverables.map((deliverable) => (
                          <div key={deliverable} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <span style={{
                              flexShrink: 0,
                              width: "18px",
                              height: "18px",
                              borderRadius: "9999px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: "rgba(255,107,0,0.12)",
                              color: accent,
                            }}>
                              <Check size={11} strokeWidth={3} />
                            </span>
                            <span style={{ fontSize: "13px", color: card.deliverable, lineHeight: 1.3 }}>
                              {deliverable}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Next step */}
                    {nextItem && (
                      <div style={{
                        margin: "16px 18px 18px",
                        paddingTop: "14px",
                        borderTop: `1px solid ${card.divider}`,
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}>
                        <span style={{
                          fontSize: "11px",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          fontWeight: 600,
                          color: card.muted,
                        }}>
                          Próxima etapa
                        </span>
                        <ArrowRight size={13} style={{ color: accent, flexShrink: 0 }} />
                        <button
                          style={{
                            background: "transparent",
                            border: "none",
                            padding: 0,
                            cursor: "pointer",
                            fontSize: "13px",
                            fontWeight: 700,
                            color: card.title,
                          }}
                          onClick={(e) => { e.stopPropagation(); toggleItem(nextItem.id); }}
                        >
                          {nextItem.title}
                        </button>
                      </div>
                    )}
                    {!nextItem && <div style={{ height: "18px" }} />}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
