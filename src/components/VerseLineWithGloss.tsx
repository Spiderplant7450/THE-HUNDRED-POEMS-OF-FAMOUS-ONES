import React, { useMemo } from 'react';
import { VocabularyItem, ReadingTheme } from '../types';
import { lookupWord, cleanWord } from '../data/poetDictionary';
import { WordGlossaryTooltip } from './WordGlossaryTooltip';

interface VerseLineWithGlossProps {
  line: string;
  poemVocabulary?: VocabularyItem[];
  theme?: ReadingTheme;
  className?: string;
  dropCapLetter?: string;
}

export function VerseLineWithGloss({
  line,
  poemVocabulary,
  theme = 'medici',
  className = '',
  dropCapLetter,
}: VerseLineWithGlossProps) {
  // Parse line into tokens of word and punctuation/whitespace
  const tokens = useMemo(() => {
    // If there's a drop cap on this line, we strip the first character from parsing
    let lineToParse = line;
    if (dropCapLetter && line.startsWith(dropCapLetter)) {
      lineToParse = line.slice(dropCapLetter.length);
    }

    // Split preserving spaces and punctuation
    const regex = /([a-zA-Z\u00C0-\u024F\u1E00-\u1EFF'’]+|[^a-zA-Z\u00C0-\u024F\u1E00-\u1EFF'’\s]+|\s+)/g;
    const parts = lineToParse.match(regex) || [lineToParse];

    return parts.map((part, index) => {
      // Check if this part looks like an English/poetic word
      if (/[a-zA-Z]/.test(part)) {
        const item = lookupWord(part, poemVocabulary);
        if (item) {
          return {
            id: `${index}-${part}`,
            text: part,
            isWord: true,
            item,
          };
        }
      }
      return {
        id: `${index}-${part}`,
        text: part,
        isWord: false,
      };
    });
  }, [line, poemVocabulary, dropCapLetter]);

  return (
    <span className={className}>
      {dropCapLetter && <span className="drop-cap">{dropCapLetter}</span>}
      {tokens.map((token) => {
        if (token.isWord && token.item) {
          return (
            <WordGlossaryTooltip
              key={token.id}
              word={token.text}
              item={token.item}
              theme={theme}
            />
          );
        }
        return <React.Fragment key={token.id}>{token.text}</React.Fragment>;
      })}
    </span>
  );
}
