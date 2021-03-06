import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import { MenuBar } from './menu_bar';
import { Statement } from './statement';
import { Questions, Editor } from './questions';
import { Services } from '../../../../services';

export const Form = ({ submit, mode, problemProps, questionsProps }) => {
  // TODO separate state ?
  // TODO wasted renders ??

  const [problem, setProblem] = useState({
    title: '',
    statement: '',
    questions: []
  });

  const [editor, setEditor] = useState({
    isOpen: false,
    question: '',
    isEditing: '',
    idToEdit: ''
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (problemProps) {
      const _questions = questionsProps ? questionsProps : [];
      setProblem({
        title: problemProps.title,
        statement: problemProps.statement,
        questions: _questions
      });
    }
  }, [problemProps, questionsProps]);

  const handleChange = e =>
    setProblem({ ...problem, [e.target.name]: e.target.value });

  const editQuestion = question => setEditor({ ...editor, question });

  const openEditor = () => setIsOpen(true);
  const closeEditor = () => setIsOpen(false);

  const deleteQuestion = id => {
    const { questions } = problem;

    setProblem({
      ...problem,
      questions: questions.filter(question => question.app_id !== id)
    });
  };

  const addQuestion = () => {
    const { isEditing, question, idToEdit } = editor;

    if (isEditing) {
      setProblem({
        ...problem,
        questions: problem.questions.map(q =>
          q.app_id === idToEdit
            ? {
                question,
                app_id: idToEdit
              }
            : q
        )
      });
    } else {
      setProblem({
        ...problem,
        questions: problem.questions.concat(
          Services.problems.write.create(question)
        )
      });
    }
  };

  const openEditorWithProblem = (question, id) => {
    setEditor({
      question,
      isEditing: true,
      idToEdit: id
    });

    setIsOpen(true);
  };

  const submitQuestion = () => {
    const write_problem = {
      title: problem.title,
      statement: problem.statement,
      write_problem_questions_attributes: problem.questions
    };

    submit(write_problem);
  };

  return (
    <Grid container alignItems="flex-start">
      <Grid item xs={12} style={{ padding: 32 }}>
        <MenuBar
          handleChange={handleChange}
          title={problem.title}
          submitQuestion={submitQuestion}
          mode={mode}
        />
      </Grid>

      <Grid item md={6} xs={12} style={{ padding: 32 }}>
        <Statement
          statement={problem.statement}
          handleChange={handleChange}
          mode={mode}
        />
      </Grid>

      <Grid item md={6} xs={12} style={{ padding: 32 }}>
        <Questions
          questions={problem.questions}
          openEditor={openEditor}
          deleteQuestion={deleteQuestion}
          editQuestion={openEditorWithProblem}
        />
      </Grid>

      <Editor
        isOpen={isOpen}
        close={closeEditor}
        editQuestion={editQuestion}
        question={editor.question}
        addQuestion={addQuestion}
      />
    </Grid>
  );
};
