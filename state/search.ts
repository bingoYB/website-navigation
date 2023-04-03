import { atom } from 'jotai';
import { useMachine } from '@xstate/react';
import { Machine, assign } from 'xstate';

// 定义搜索状态机
const searchMachine = Machine({
  id: 'search',
  initial: 'idle',
  context: {
    searchWord: '',
    searchHistory: [],
    searchEngine: 'google',
    suggestions: [],
    suggestionIndex: -1,
  },
  states: {
    idle: {
      on: {
        INPUT: {
          target: 'searching',
          actions: assign({ searchWord: (_, event) => event.value }),
        },
        SWITCH_ENGINE: {
          actions: assign({ searchEngine: (_, event) => event.engine }),
        },
      },
    },
    searching: {
      invoke: {
        src: 'searchApi',
        onDone: {
          target: 'searched',
          actions: assign({ suggestions: (_, event) => event.data }),
        },
      },
      on: {
        INPUT: {
          actions: assign({ searchWord: (_, event) => event.value }),
        },
        SWITCH_ENGINE: {
          actions: assign({ searchEngine: (_, event) => event.engine }),
        },
        SELECT_SUGGESTION: {
          actions: assign({
            searchWord: (context, event) => context.suggestions[event.index],
            suggestionIndex: -1,
          }),
        },
        MOVE_UP: {
          actions: assign({
            suggestionIndex: (context) =>
              Math.max(context.suggestionIndex - 1, -1),
          }),
        },
        MOVE_DOWN: {
          actions: assign({
            suggestionIndex: (context) =>
              Math.min(
                context.suggestionIndex + 1,
                context.suggestions.length - 1
              ),
          }),
        },
      },
    },
    searched: {
      on: {
        INPUT: {
          target: 'searching',
          actions: assign({ searchWord: (_, event) => event.value }),
        },
        SWITCH_ENGINE: {
          actions: assign({ searchEngine: (_, event) => event.engine }),
        },
      },
    },
  },
});

// 定义 atom 状态
const searchStateAtom = atom((get) => ({
  searchState: useMachine(searchMachine, {
    services: {
      searchApi: async (context) => {
        // 这里可以调用实际的搜索 API，这里假设是模拟搜索
        const suggestions = [
          context.searchWord + '1',
          context.searchWord + '2',
          context.searchWord + '3',
        ];
        return suggestions;
      },
    },
  }),
  searchWord: get(searchWordAtom),
}));

const searchWordAtom = atom((get) => get(searchStateAtom).searchState.context.searchWord);
