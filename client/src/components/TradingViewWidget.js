import React, { useEffect } from 'react';
import styled from 'styled-components';

const WidgetContainer = styled.div`
  height: 500px;
  margin: 2rem 0;
  border-radius: 15px;
  overflow: hidden;
`;

function TradingViewWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        autosize: true,
        symbol: "BINANCE:BTCUSDT",
        interval: "15",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#000",
        enable_publishing: false,
        hide_top_toolbar: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        container_id: "tradingview-widget"
      });
    };
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <WidgetContainer id="tradingview-widget" />
  );
}

export default TradingViewWidget;