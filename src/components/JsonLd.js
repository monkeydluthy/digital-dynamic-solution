import { useEffect } from 'react';

function JsonLd({ data, id }) {
  const json = JSON.stringify(data);

  useEffect(() => {
    const scriptId = id || 'json-ld-script';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = json;

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, [json, id]);

  return null;
}

export default JsonLd;
