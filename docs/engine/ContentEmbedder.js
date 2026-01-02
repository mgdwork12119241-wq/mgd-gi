/**
 * ContentEmbedder - Handles URL parsing and iframe generation.
 */
export class ContentEmbedder {
    static parseUrl(url) {
        const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const vimeoRegex = /vimeo\.com\/(\d+)/;
        
        const ytMatch = url.match(youtubeRegex);
        if (ytMatch) {
            return { type: 'video', provider: 'youtube', id: ytMatch[1] };
        }

        const vimeoMatch = url.match(vimeoRegex);
        if (vimeoMatch) {
            return { type: 'video', provider: 'vimeo', id: vimeoMatch[1] };
        }

        if (url.match(/\.(jpeg|jpg|gif|png|webp)$/i)) {
            return { type: 'image', url: url };
        }

        return { type: 'web', url: url };
    }

    static getEmbedHtml(info) {
        if (info.type === 'video') {
            if (info.provider === 'youtube') {
                return `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${info.id}" frameborder="0" allowfullscreen></iframe>`;
            }
            if (info.provider === 'vimeo') {
                return `<iframe src="https://player.vimeo.com/video/${info.id}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>`;
            }
        }
        if (info.type === 'web') {
            return `<iframe src="${info.url}" width="100%" height="100%" frameborder="0"></iframe>`;
        }
        if (info.type === 'image') {
            return `<img src="${info.url}" style="width:100%; height:100%; object-fit:contain;" />`;
        }
        return '';
    }
}
