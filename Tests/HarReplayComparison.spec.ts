import { test, expect } from '@playwright/test';
import { compareReplayBody, replayRequest, resolveReplayValue, ReplayCase } from './support/har-replay';

test('HAR 1:1: reprova dados errados mesmo com o mesmo schema', () => {
  expect(compareReplayBody({item: {cep: '01310100'}}, {item: {cep: '92420130'}}))
    .toEqual(['/item/cep: valor divergente']);
});

test('HAR 1:1: corpo vazio não substitui resultado observado', () => {
  expect(compareReplayBody({item: {id: 'fixture'}}, {})).toEqual(['/item: campo ausente']);
});

test('HAR 1:1: compara conteúdo, ordem e tamanho de listas', () => {
  expect(compareReplayBody({itens: [1, 2]}, {itens: [2, 1, 3]})).toHaveLength(3);
});

test('HAR 1:1: erro diferente com o mesmo status não passa', () => {
  expect(compareReplayBody({codigo: 'CAMPO_INVALIDO'}, {codigo: 'SESSAO_INVALIDA'}))
    .toEqual(['/codigo: valor divergente']);
});

test('HAR 1:1: rastreamento pode mudar, mas deve manter presença e tipo', () => {
  expect(compareReplayBody({requestId: 'a'}, {requestId: 'b'})).toEqual([]);
  expect(compareReplayBody({requestId: 'a'}, {})).toEqual(['/requestId: campo ausente']);
  expect(compareReplayBody({requestId: 'a'}, {requestId: 1})).toEqual(['/requestId: tipo divergente']);
});

test('HAR 1:1: exceção escalar não permite ignorar objeto inteiro', () => {
  expect(compareReplayBody({item: {id: 1}}, {item: {id: 2}}, ['/item']))
    .toEqual(['/item: ignorar objeto/lista não é permitido']);
  expect(compareReplayBody({item: 1}, {item: 1}, ['/inexistente']))
    .toEqual(['/inexistente: exceção não utilizada; revise o JSON Pointer']);
});

test('HAR 1:1: divergência não imprime valores capturados', () => {
  const errors = compareReplayBody({item: 'VALOR_PRIVADO_A'}, {item: 'VALOR_PRIVADO_B'});
  expect(errors.join(' ')).not.toContain('VALOR_PRIVADO');
});

test('HAR 1:1: preserva query repetida e não transporta host da captura', () => {
  const c = {entry: {request: {url: 'https://capture.invalid/api/example?tipo=A&tipo=B'}}, override: {}} as ReplayCase;
  expect(replayRequest(c).url).toBe('/api/example?tipo=A&tipo=B');
});

test('HAR 1:1: placeholder ausente não vira request com massa vazia', () => {
  expect(() => resolveReplayValue('${ENV:HAR_REPLAY_MISSING_SYNTHETIC_VARIABLE_9382}'))
    .toThrow('Variável ausente para replay');
});
