from PIL import Image, ImageDraw

# Function to create icons with a bee design

def create_bee_icon(size, filename):
    img = Image.new('RGB', (size, size), color = '#FFFF00')  # Yellow background
    d = ImageDraw.Draw(img)

    # Draw a simple bee design
    d.ellipse([(size * 0.1, size * 0.3), (size * 0.9, size * 0.7)], fill=(0, 0, 0))  # Bee body
    d.ellipse([(size * 0.35, size * 0.25), (size * 0.65, size * 0.45)], fill=(255, 215, 0))  # Bee head
    d.ellipse([(size * 0.25, size * 0.15), (size * 0.35, size * 0.25)], fill=(0, 0, 0))  # Left eye
    d.ellipse([(size * 0.65, size * 0.15), (size * 0.75, size * 0.25)], fill=(0, 0, 0))  # Right eye
    d.polygon([(size * 0.25, size * 0.55), (size * 0.5, size * 0.8), (size * 0.75, size * 0.55)], fill=(255, 255, 255))  # Wings

    img.save(filename)

# Generate icons of different sizes
sizes = [192, 512, 180]
for size in sizes:
    create_bee_icon(size, f'bee_icon_{size}.png')
