# Development Guide

## Project Structure
- `index.html`: Entry point and UI layer.
- `engine/`:
  - `SpatialCamera.js`: Manages viewport state.
  - `RenderEngine.js`: Handles the canvas drawing loop.
  - `InputHandler.js`: Processes user interactions.
  - `ContentEmbedder.js`: Logic for embedding external content.
- `entities/`:
  - `SpatialEntity.js`: Base class for all objects.
  - `EntityTypes.js`: Specific implementations (Concept, Web, Video).

## Adding New Entity Types
1. Create a new class in `entities/EntityTypes.js` extending `SpatialEntity`.
2. Override the `draw` method.
3. Update `index.html` to allow adding the new type.

## Future Roadmap
- [ ] 3D Camera support (CSS3D or WebGL).
- [ ] Persistent storage (LocalDB or Backend).
- [ ] Collaborative spatial editing.
- [ ] AI-driven spatial organization.
