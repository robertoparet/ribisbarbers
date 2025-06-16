import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('🚀 API route webhook llamado');
  
  try {
    // Obtener los datos del cuerpo de la solicitud
    const body = await request.json();
    console.log('📝 Datos recibidos:', JSON.stringify(body, null, 2));
    
    // URL del webhook (usar variable de entorno o fallback)
    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL || 'http://localhost:5678/webhook/reserva-barberia';
    console.log('🎯 Enviando a:', webhookUrl);
    console.log('🔧 Variables de entorno NEXT_PUBLIC_WEBHOOK_URL:', process.env.NEXT_PUBLIC_WEBHOOK_URL);
    
    // Primero verificar si podemos hacer un simple fetch
    console.log('📡 Intentando conectar al webhook...');
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    console.log('✅ Respuesta recibida - Status:', response.status);
    console.log('📋 Headers de respuesta:', Object.fromEntries(response.headers.entries()));

    if (response.ok) {
      let responseData;
      try {
        responseData = await response.text();
        console.log('📄 Contenido de respuesta:', responseData);
      } catch {
        console.log('⚠️ No se pudo leer el contenido de respuesta');
        responseData = 'OK';
      }
      
      return NextResponse.json({ 
        success: true, 
        message: 'Reserva enviada correctamente',
        data: responseData 
      });
    } else {
      const errorText = await response.text().catch(() => 'No response text');
      console.error('❌ Webhook respondió con error:', response.status, errorText);
      throw new Error(`Webhook error: ${response.status} - ${errorText}`);
    }
  } catch (error) {
    console.error('❌ Error completo en proxy webhook:', error);
    
    if (error instanceof Error) {
      console.error('❌ Error name:', error.name);
      console.error('❌ Error message:', error.message);
      console.error('❌ Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error al procesar la reserva',
        error: error instanceof Error ? error.message : 'Error desconocido',
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
