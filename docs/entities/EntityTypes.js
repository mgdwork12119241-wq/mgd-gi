import { SpatialEntity } from './SpatialEntity.js';

export class ConceptNode extends SpatialEntity {
    constructor(id, x, y, label) {
        super(id, x, y, 150, 150);
        this.type = 'concept';
        this.label = label;
    }

    draw(ctx, x, y, w, h, zoom) {
        ctx.beginPath();
        ctx.arc(x, y, w / 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 204, 0.1)';
        ctx.fill();
        ctx.strokeStyle = this.selected ? '#ffffff' : '#00ffcc';
        ctx.lineWidth = 2 * zoom;
        ctx.stroke();

        if (zoom > 0.2) {
            ctx.fillStyle = '#ffffff';
            ctx.font = `${14 * zoom}px Arial`;
            ctx.textAlign = 'center';
            ctx.fillText(this.label, x, y + 5 * zoom);
        }
    }
}

export class WebScreen extends SpatialEntity {
    constructor(id, x, y, url) {
        super(id, x, y, 400, 300);
        this.type = 'web';
        this.url = url;
    }

    draw(ctx, x, y, w, h, zoom) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.fillRect(x - w / 2, y - h / 2, w, h);
        ctx.strokeStyle = this.selected ? '#00ffcc' : 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 1 * zoom;
        ctx.strokeRect(x - w / 2, y - h / 2, w, h);

        if (zoom > 0.3) {
            ctx.fillStyle = '#ffffff';
            ctx.font = `${12 * zoom}px monospace`;
            ctx.textAlign = 'left';
            ctx.fillText(this.url.substring(0, 30) + '...', x - w / 2 + 10 * zoom, y - h / 2 + 20 * zoom);
        }
    }
}

export class VideoScreen extends SpatialEntity {
    constructor(id, x, y, videoId, provider = 'youtube') {
        super(id, x, y, 480, 270);
        this.type = 'video';
        this.videoId = videoId;
        this.provider = provider;
    }

    draw(ctx, x, y, w, h, zoom) {
        ctx.fillStyle = '#000000';
        ctx.fillRect(x - w / 2, y - h / 2, w, h);
        ctx.strokeStyle = this.selected ? '#ff0000' : '#ffffff';
        ctx.lineWidth = 2 * zoom;
        ctx.strokeRect(x - w / 2, y - h / 2, w, h);

        // Draw a play button icon
        ctx.beginPath();
        ctx.moveTo(x - 15 * zoom, y - 15 * zoom);
        ctx.lineTo(x + 20 * zoom, y);
        ctx.lineTo(x - 15 * zoom, y + 15 * zoom);
        ctx.closePath();
        ctx.fillStyle = '#ffffff';
        ctx.fill();
    }
}
