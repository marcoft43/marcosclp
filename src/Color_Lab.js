export default function ColorScheme() {
    const colors = [
      { name: 'Veronesergrün', hex: '#1E5945' },
      { name: 'Ochre', hex: '#D1B280' },
      { name: 'Muted Red', hex: '#8B4B4B' },
      { name: 'Cool Grey', hex: '#5A5E5C' },
      { name: 'Ivory', hex: '#F0EADA' },
    ];
  
    return (
      <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {colors.map((color) => (
          <div key={color.name} className="p-4 rounded-2xl shadow-lg" style={{ backgroundColor: color.hex }}>
            <div className="text-white font-bold text-xl">{color.name}</div>
            <div className="text-white">{color.hex}</div>
          </div>
        ))}
      </div>
    );
  }
  