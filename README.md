# FaceGrid Figma Plugin

Generate beautiful grids of AI-generated faces directly in Figma for mockups, presentations, and design projects.

![Plugin Usage](FaceGrid%20Figma%20Plugin.gif)

![FaceGrid](logo.png)

## Features

- 🎯 **Multiple Grid Sizes**: Choose from 3×3 to 10×15 face grids
- 🚀 **Fast Generation**: Powered by AI face generation API
- 🎨 **Figma Native**: Creates individual rectangles with proper face fills
- 📏 **Customizable Gaps**: Adjustable spacing between faces
- ⚡ **Real-time Progress**: Visual progress tracking during generation
- 🎪 **Professional UI**: Clean, modern interface matching Figma design

## Grid Options

- **3×3** (9 faces) - Perfect for small mockups
- **4×4** (16 faces) - Balanced grid for most uses
- **4×6** (24 faces) - Great for team layouts
- **5×5** (25 faces) - Square format for social media
- **6×6** (36 faces) - Larger team representations
- **8×8** (64 faces) - High-density grids
- **10×10** (100 faces) - Maximum square grid
- **10×15** (150 faces) - Large horizontal layout

## Installation

### Development Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/juleslemee/facegrid-figma-plugin.git
   cd facegrid-figma-plugin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the plugin:
   ```bash
   npm run build
   ```

4. In Figma:
   - Go to **Plugins** → **Development** → **Import plugin from manifest**
   - Select the `manifest.json` file from this directory
   - The plugin will appear in your development plugins

### Production Installation

1. Download the latest release from the [releases page](https://github.com/juleslemee/facegrid-figma-plugin/releases)
2. In Figma, go to **Plugins** → **Development** → **Import plugin from manifest**
3. Select the downloaded `manifest.json` file

## Usage

1. Open Figma and create or open a design file
2. Go to **Plugins** → **FaceGrid**
3. Choose your desired grid size from the dropdown
4. Select gap spacing between faces
5. Click **Generate Face Grid**
6. Wait for the generation to complete
7. The grid will be created as a frame with individual face rectangles

## How It Works

The plugin connects to the FaceGrid API to generate unique AI faces, then creates a structured grid in Figma using:

- **Frame**: Main container for the entire grid
- **Rectangles**: Individual face containers with image fills
- **Smart Positioning**: Automatic layout with customizable gaps
- **Viewport Centering**: Grid appears centered in your current view

## Development

### Building

```bash
npm run build
```

### Project Structure

```
├── code.ts          # Main plugin logic
├── manifest.json    # Figma plugin manifest
├── package.json     # Dependencies and scripts
├── tsconfig.json    # TypeScript configuration
└── README.md        # This file
```

## API

The plugin uses the FaceGrid API:
- **Endpoint**: `https://facegrid.juleslemee.com/api/generate-faces`
- **Method**: GET
- **Parameters**: `count` (number of faces to generate)
- **Response**: Array of base64-encoded face images

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

- **AI Faces**: Generated using state-of-the-art AI technology
- **Design**: Inspired by modern design systems
- **Development**: Built with TypeScript and Figma Plugin API

## Support

If you encounter any issues or have questions:
- Open an issue on [GitHub](https://github.com/juleslemee/facegrid-figma-plugin/issues)
- Check the [Figma Plugin Documentation](https://www.figma.com/plugin-docs/)


🌐 **Try the web version**: [facegrid.juleslemee.com](https://facegrid.juleslemee.com)

---

Made with 💙 by [Jules Lemée](https://juleslemee.com)
