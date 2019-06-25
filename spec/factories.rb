FactoryBot.define do
  factory :write_favorite do
    user { nil }
    write_problem { nil }
  end

    factory :user do
        username { Faker::Internet.username}
        email { Faker::Internet.email }
        password { "password"} 
        password_confirmation { "password" }
    end
    factory :alternative do
        text { "test_alternative" }
    end

    factory :multiple_choice_problem do
        #title { Faker::Books::Lovecraft.tome }
        #statement { Faker::Books::Lovecraft.paragraph }
        #correct_answer { "Cthulhu" }
        user # tem que pertencer a um usuario
    end
end