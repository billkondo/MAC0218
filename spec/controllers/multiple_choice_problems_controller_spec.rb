require 'rails_helper'

RSpec.describe MultipleChoiceProblemsController, type: :controller do
    describe "Create multiple choice problem" do
        before(:each) do
            login_user
            @params = { 
                multiple_choice_problem: { 
                    title: "Problema do Teste",
                    statement: "Enunciado do problema",
                    correct_answer: "primeira alte",
                    alternatives_attributes: [
                        {text: "primeira alte"},
                        {text: "segunda alte"}
                    ]
                }
            }
        end
        it "has 200 status code" do
            post :create_multiple_choice, :params => @params
            expect(response).to have_http_status(:created)
        end
        it "returns error without title" do
            @params[:multiple_choice_problem][:title] = nil
            post :create_multiple_choice, :params => @params
            expect(response).to have_http_status(:error)
            expect(response.body).to include("title", "can't be blank")
        end
        it "returns error without statement" do
            @params[:multiple_choice_problem][:statement] = nil
            post :create_multiple_choice, :params => @params
            expect(response).to have_http_status(:error)
            expect(response.body).to include("statement", "can't be blank")
        end
        it "returns error without correct answer" do
            @params[:multiple_choice_problem][:correct_answer] = nil
            post :create_multiple_choice, :params => @params
            expect(response).to have_http_status(:error)
            expect(response.body).to include("correct", "can't be blank")
        end
        it "returns error without less then 2 alternatives" do
            @params[:multiple_choice_problem][:alternatives_attributes] = [{text: "primeira alte"}]
            post :create_multiple_choice, :params => @params
            expect(response).to have_http_status(:error)
            expect(response.body).to include("alternatives", "is too short")
        end
        xit "error when correct alternative is not in alternatives" do
            @params[:multiple_choice_problem][:alternatives_attributes] = [{text: "alt errada"}, {text: "outra errada"}]
            post :create_multiple_choice, :params => @params
            expect(response).to have_http_status(:error)
            #expect(response.body).to include("correct", "")
        end

    end
    describe "Update multiple choice problem" do
        before(:each) do
            @user = login_user
            @params = { 
                title: "Problema do Teste",
                statement: "Enunciado do problema",
                correct_answer: "primeira alte",
                alternatives_attributes: [
                    {text: "primeira alte"},
                    {text: "segunda alte"}
                ]
            }
            post :create_multiple_choice, :params => @params
        end
        xit "has 200 status code" do
            expect(response).to have_http_status(:created)
            prob_id = JSON.parse(response.body)["id"]
            post :update_multiple_choice, :params => {:id => prob_id, :multiple_choice_problem => @params}
            expect(response).to have_http_status(:ok)
        end
    end
    describe "Get all problems" do
        it "has 200 status code" do
            get :get_problems
            expect(response.status).to eq(200)
            expect(response.content_type).to eq "application/json"
        end
    end

    describe "Get current user problems" do
        it "has 200 status code" do
            login_user
            get :current_user_multiple_choice
            expect(response.status).to eq(200)
            expect(response.content_type).to eq "application/json"
        end
    end
end
