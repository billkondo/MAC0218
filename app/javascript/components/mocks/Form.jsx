class Form extends React.Component {
    state = {
        title: '',
        problems: [],
        problem_id: '',

        isOwner: '',
        id: '',

        errors: []
    }

    addProblem = () => {
        if (this.state.problem) {
            this.setState(state => ({
                problems: state.problems.concat([
                    {
                        test: state.problem_id
                    }
                ]),
                problem_id: ''
            }));
        }
    }


    render() {
        const {
            title,
            problems,
            problem_id,
            isOwner, 
            id,
            errors
        } = this.state;

        const {mode} = this.props;

        return (
            <Grid container alignItems="flex-start">
            <Grid item xs={12} style={{ padding: 32 }}>
              <MenuBar
                title={title}
                handleChange={this.handleChange}
                onSubmit={this.onSubmit}
                mode={mode}
                isOwner={isOwner}
                id={id}
              />
            </Grid>
    
            <Grid item xs={12} md={6} style={{ padding: 32 }}>
              <Statement
                statement={statement}
                handleChange={this.handleChange}
                mode={mode}
              />
            </Grid>
    
          </Grid>
        );

    }
}