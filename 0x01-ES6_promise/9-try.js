export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const func = mathFunction();
    queue.push(func);
  } catch (e) {
    queue.push(e.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
