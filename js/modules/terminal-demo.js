/* Módulo de Terminal Interactivo en Hero - Portfolio Desarrollador */

export function initTerminalDemo() {
  const terminalContent = document.getElementById('terminalCodeContent');
  const tabs = document.querySelectorAll('.js-terminal-tab');

  if (!terminalContent || !tabs.length) return;

  const CODE_SNIPPETS = {
    arca: `<?php
// Módulo de Facturación Electrónica ARCA / AFIP
namespace DevStudio\\Facturacion;

class ArcaService {
    private string $afipCuit = "20389472912";
    private $soapClient;

    public function emitirComprobante(array $factura): array {
        $cae = $this->soapClient->FECAESolicitar([
            'Auth' => $this->getAuthToken(),
            'FeCAEReq' => $this->buildPayload($factura)
        ]);
        
        return [
            'status' => 'APPROVED',
            'cae' => $cae->ResultGet->CAE,
            'vencimiento' => $cae->ResultGet->CAEFchVto
        ];
    }
}`,
    pos: `// Sistema Las Piedritas TPV - Control de Mesas & Comandas
class PosEngine {
    constructor() {
        this.tables = new Map();
        this.socket = new WebSocket('wss://pos.laspiedritas.local');
    }

    async updateTableStatus(tableId, status, items = []) {
        const payload = { tableId, status, items, timestamp: Date.now() };
        await fetch('/api/mesas/update.php', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
        this.printKitchenTicket(payload);
    }
}`,
    queempa: `// QUEEMPA - Checkout Automatizado por WhatsApp
function generateWhatsAppOrder(cartItems, customerInfo) {
    let msg = \`*¡Nuevo Pedido QUEEMPA!* 🥟🍕\\n\\n\`;
    let total = 0;
    
    cartItems.forEach(item => {
        msg += \`• \${item.qty}x \${item.name} (\${item.options.join(', ')}) - $\${item.subtotal}\\n\`;
        total += item.subtotal;
    });
    
    msg += \`\\n*Total:* $\${total}\\n*Cliente:* \${customerInfo.name}\\n*Dirección:* \${customerInfo.address}\`;
    return \`https://wa.me/5493810000000?text=\${encodeURIComponent(msg)}\`;
}`
  };

  function loadSnippet(key) {
    terminalContent.textContent = CODE_SNIPPETS[key] || CODE_SNIPPETS.arca;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const snippetKey = tab.getAttribute('data-snippet');
      loadSnippet(snippetKey);
    });
  });

  // Initial load
  loadSnippet('arca');
}
