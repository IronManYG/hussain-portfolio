export function initRadarChart() {
    const radarContainer = document.getElementById('radar-chart-container');
    if (!radarContainer || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const skills = [
        { label: "Kotlin", value: 95 },
        { label: "Compose", value: 90 },
        { label: "Architecture", value: 92 },
        { label: "Backend", value: 75 },
        { label: "KMP / CMP", value: 85 },
        { label: "Testing", value: 88 }
    ];

    // Larger viewBox so labels are never clipped
    const size = 380;
    const center = size / 2;
    const radius = size * 0.33;   // polygon radius (tighter to center)
    const angleStep = (Math.PI * 2) / skills.length;

    let svgHtml = `<svg viewBox="0 0 ${size} ${size}" class="radar-chart">`;
    
    // Draw Grid
    for (let i = 1; i <= 4; i++) {
        const r = (radius / 4) * i;
        let points = "";
        for (let j = 0; j < skills.length; j++) {
            const x = center + r * Math.cos(j * angleStep - Math.PI / 2);
            const y = center + r * Math.sin(j * angleStep - Math.PI / 2);
            points += `${x},${y} `;
        }
        svgHtml += `<polygon points="${points}" class="radar-grid" />`;
    }

    // Draw Axes & Labels
    skills.forEach((skill, i) => {
        const x = center + radius * Math.cos(i * angleStep - Math.PI / 2);
        const y = center + radius * Math.sin(i * angleStep - Math.PI / 2);
        svgHtml += `<line x1="${center}" y1="${center}" x2="${x}" y2="${y}" class="radar-axis" />`;
        
        // Label positioning — 42px outside the polygon edge
        const labelR = radius + 42;
        const lx = center + labelR * Math.cos(i * angleStep - Math.PI / 2);
        const ly = center + labelR * Math.sin(i * angleStep - Math.PI / 2);

        // Split label on ' / ' or space if >10 chars for two-line rendering
        const words = skill.label.split(' / ');
        if (words.length > 1) {
            // Two-line label (e.g. "KMP / CMP")
            svgHtml += `<text x="${lx}" text-anchor="middle" class="radar-label">
                <tspan x="${lx}" dy="-0.6em" dominant-baseline="middle">${words[0]}</tspan>
                <tspan x="${lx}" dy="1.4em" dominant-baseline="middle">${words[1]}</tspan>
            </text>`;
        } else {
            svgHtml += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" class="radar-label">${skill.label}</text>`;
        }
    });

    // Draw Polygon Area
    svgHtml += `<polygon points="" class="radar-area" id="radar-polygon" />`;
    svgHtml += `</svg>`;
    
    radarContainer.innerHTML = svgHtml;

    // Animate on scroll
    ScrollTrigger.create({
        trigger: radarContainer,
        start: "top 80%",
        onEnter: () => {
            const polygon = document.getElementById('radar-polygon');
            if(!polygon) return;
            const points = skills.map((skill, i) => {
                const r = (radius * skill.value) / 100;
                const x = center + r * Math.cos(i * angleStep - Math.PI / 2);
                const y = center + r * Math.sin(i * angleStep - Math.PI / 2);
                return `${x},${y}`;
            }).join(" ");
            
            polygon.setAttribute('points', points);
            gsap.from(polygon, {
                scale: 0,
                transformOrigin: "center center",
                duration: 1.5,
                ease: "expo.out"
            });
        }
    });
}
