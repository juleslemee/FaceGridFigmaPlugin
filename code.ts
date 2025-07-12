const html = `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
      margin: 0;
      padding: 20px;
      background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #dbeafe 100%);
      min-height: 100vh;
    }
    
    .logo-container {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
    }
    
    .logo {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
    
    h1 {
      font-size: 24px;
      font-weight: 700;
      margin: 0;
      background: linear-gradient(135deg, #1e293b 0%, #1e40af 50%, #2563eb 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .card {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    }
    
    .form-group {
      margin-bottom: 20px;
    }
    
    label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 8px;
      color: #334155;
    }
    
    select {
      width: 100%;
      padding: 10px 14px;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      font-size: 14px;
      background: white;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    select:hover {
      border-color: #cbd5e1;
    }
    
    select:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }
    
    button {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);
    }
    
    button:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(37, 99, 235, 0.35);
    }
    
    button:active:not(:disabled) {
      transform: translateY(0);
    }
    
    button:disabled {
      background: #94a3b8;
      cursor: not-allowed;
      box-shadow: none;
    }
    
    .progress {
      margin-top: 20px;
      display: none;
    }
    
    .progress.show {
      display: block;
    }
    
    .progress-text {
      font-size: 13px;
      color: #475569;
      margin-bottom: 8px;
      font-weight: 500;
    }
    
    .progress-bar-container {
      width: 100%;
      height: 8px;
      background: #e2e8f0;
      border-radius: 999px;
      overflow: hidden;
      position: relative;
    }
    
    .progress-bar {
      height: 100%;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      border-radius: 999px;
      transition: width 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    
    .progress-bar::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
      );
      animation: shimmer 1.5s infinite;
    }
    
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    .error {
      margin-top: 16px;
      padding: 12px 16px;
      background: #fef2f2;
      border: 1px solid #fecaca;
      border-radius: 8px;
      color: #dc2626;
      font-size: 13px;
      display: none;
      font-weight: 500;
    }
    
    .error.show {
      display: block;
    }
    
    .success-text {
      color: #059669;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo-container">
      <svg class="logo" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <g stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21.33 28v-2.67a5.33 5.33 0 0 0-5.33-5.33H8a5.33 5.33 0 0 0-5.33 5.33V28"></path>
          <circle cx="12" cy="9.33" r="5.33"></circle>
          <path d="M29.33 28v-2.67a5.33 5.33 0 0 0-4-5.16"></path>
          <path d="M21.33 4.17a5.33 5.33 0 0 1 0 10.33"></path>
        </g>
        <g stroke="#eab308" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="#eab308" transform="translate(24, 3) scale(0.4)">
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
          <path d="M20 3v4"></path>
          <path d="M22 5h-4"></path>
          <path d="M4 17v2"></path>
          <path d="M5 18H3"></path>
        </g>
      </svg>
      <h1>FaceGrid</h1>
    </div>
  
  <div class="form-group">
    <label for="gridSize">Grid Size</label>
    <select id="gridSize">
      <option value="3x3">3×3 (9 faces)</option>
      <option value="4x4">4×4 (16 faces)</option>
      <option value="4x6">4×6 (24 faces)</option>
      <option value="5x5">5×5 (25 faces)</option>
      <option value="6x6">6×6 (36 faces)</option>
      <option value="8x8">8×8 (64 faces)</option>
      <option value="10x10">10×10 (100 faces)</option>
      <option value="10x15">10×15 (150 faces)</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="gap">Gap between faces (px)</label>
    <select id="gap">
      <option value="0">No gap</option>
      <option value="4" selected>4px</option>
      <option value="8">8px</option>
      <option value="12">12px</option>
      <option value="16">16px</option>
    </select>
  </div>
  
  <button id="generate">Generate Face Grid</button>
  
  <div id="progress" class="progress">
    <div class="progress-text" id="progress-text">Initializing...</div>
    <div class="progress-bar-container">
      <div class="progress-bar" id="progress-bar" style="width: 0%"></div>
    </div>
  </div>
  <div id="error" class="error"></div>
  </div>
  
  <script>
    const generateBtn = document.getElementById('generate');
    const gridSizeSelect = document.getElementById('gridSize');
    const gapSelect = document.getElementById('gap');
    const progressDiv = document.getElementById('progress');
    const progressText = document.getElementById('progress-text');
    const progressBar = document.getElementById('progress-bar');
    const errorDiv = document.getElementById('error');
    
    let progressInterval;
    
    generateBtn.addEventListener('click', async () => {
      const [rows, cols] = gridSizeSelect.value.split('x').map(Number);
      const gap = parseInt(gapSelect.value);
      const totalFaces = rows * cols;
      
      // Reset everything
      generateBtn.disabled = true;
      progressText.textContent = \`Fetching \${totalFaces} faces...\`;
      progressBar.style.width = '0%';
      progressDiv.classList.add('show');
      errorDiv.classList.remove('show');
      
      // Small delay to ensure UI updates
      await new Promise(resolve => setTimeout(resolve, 50));
      
      // Estimate time based on grid size (roughly 1.15s per face)
      const estimatedTime = totalFaces * 1150;
      const incrementInterval = estimatedTime / 90; // Stop at 90% until actual completion
      
      let currentProgress = 0;
      
      // Start smooth progress animation
      progressInterval = setInterval(() => {
        if (currentProgress >= 90) {
          clearInterval(progressInterval);
          return;
        }
        currentProgress += 1;
        progressBar.style.width = \`\${currentProgress}%\`;
      }, incrementInterval);
      
      try {
        const response = await fetch(\`https://facegrid.juleslemee.com/api/generate-faces?count=\${totalFaces}\`);
        const data = await response.json();
        
        if (!data.success) {
          throw new Error(data.error || 'Failed to generate faces');
        }
        
        // Complete at 100% when faces are fetched
        clearInterval(progressInterval);
        progressBar.style.width = '100%';
        progressText.textContent = 'Grid created successfully!';
        progressText.classList.add('success-text');
        
        // Create the grid (instant)
        parent.postMessage({
          pluginMessage: {
            type: 'create-grid',
            faces: data.faces,
            rows,
            cols,
            gap
          }
        }, '*');
        
        // Hide progress after showing success
        setTimeout(() => {
          progressDiv.classList.remove('show');
          progressText.classList.remove('success-text');
          setTimeout(() => {
            progressBar.style.width = '0%';
          }, 300);
        }, 2000);
        generateBtn.disabled = false;
        
      } catch (error) {
        clearInterval(progressInterval);
        errorDiv.textContent = \`Error: \${error.message}\`;
        errorDiv.classList.add('show');
        progressDiv.classList.remove('show');
        progressBar.style.width = '0%';
        generateBtn.disabled = false;
      }
    });
    
    window.onmessage = (event) => {
      if (event.data.pluginMessage) {
        const { type } = event.data.pluginMessage;
        
        if (type === 'grid-error') {
          errorDiv.textContent = \`Error: \${event.data.pluginMessage.error}\`;
          errorDiv.classList.add('show');
          progressDiv.classList.remove('show');
          generateBtn.disabled = false;
        }
      }
    };
  </script>
</body>
</html>`;

figma.showUI(html, { width: 320, height: 420 });

async function base64ToUint8Array(base64: string): Promise<Uint8Array> {
  const base64Data = base64.split(',')[1];
  const binaryString = figma.base64Decode(base64Data);
  return binaryString;
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'create-grid') {
    try {
      const { faces, rows, cols, gap } = msg;
      const faceSize = 256;
      const totalWidth = cols * faceSize + (cols - 1) * gap;
      const totalHeight = rows * faceSize + (rows - 1) * gap;
      
      const frame = figma.createFrame();
      frame.name = `Face Grid ${rows}×${cols}`;
      frame.resize(totalWidth, totalHeight);
      frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
      
      const viewportCenter = figma.viewport.center;
      frame.x = viewportCenter.x - totalWidth / 2;
      frame.y = viewportCenter.y - totalHeight / 2;
      
      let faceIndex = 0;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          if (faceIndex < faces.length && faces[faceIndex]) {
            const rect = figma.createRectangle();
            rect.name = `Face ${row + 1}-${col + 1}`;
            rect.resize(faceSize, faceSize);
            rect.x = col * (faceSize + gap);
            rect.y = row * (faceSize + gap);
            
            const imageBytes = await base64ToUint8Array(faces[faceIndex]);
            const image = figma.createImage(imageBytes);
            rect.fills = [{
              type: 'IMAGE',
              imageHash: image.hash,
              scaleMode: 'FILL'
            }];
            
            frame.appendChild(rect);
          }
          faceIndex++;
        }
      }
      
      figma.currentPage.selection = [frame];
      figma.viewport.scrollAndZoomIntoView([frame]);
      
      figma.ui.postMessage({ 
        pluginMessage: { type: 'grid-complete' } 
      });
      
    } catch (error) {
      console.error('Error creating grid:', error);
      figma.ui.postMessage({ 
        pluginMessage: { 
          type: 'grid-error', 
          error: error instanceof Error ? error.message : 'Unknown error' 
        } 
      });
    }
  }
};

figma.on('close', () => {
  figma.closePlugin();
});