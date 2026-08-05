import re

# Read the file
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the periodic sync fallback (lines 306-367)
# Match from "// ✅ CRITICAL FIX" to "setTimeout(window.setupTopicsSyncFallback, 500);"
pattern1 = r'\s*// ✅ CRITICAL FIX:.*?setTimeout\(window\.setupTopicsSyncFallback, 500\);'
content = re.sub(pattern1, '\n  // Topics sync handled by real-time listener', content, flags=re.DOTALL)

print("✓ Removed periodic sync fallback")

# Write back
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ File updated successfully")
