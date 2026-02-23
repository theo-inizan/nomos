
export async function GET() {
    // Format Prometheus : nomos_up 1 (indique que l'app est en vie)
    const metrics = `
# HELP nomos_up Status of the app (1 = UP)
# TYPE nomos_up gauge
nomos_up 1
# HELP nomos_uptime_seconds Uptime of the process
# TYPE nomos_uptime_seconds counter
nomos_uptime_seconds ${process.uptime()}
  `.trim();

    return new Response(metrics, {
        status: 200,
        headers: { 'Content-Type': 'text/plain; version=0.0.4' },
    });
}
