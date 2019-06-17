
RSpec.describe do
    context "sanity check" do
        it "1 + 1 = 2" do
            soma = 1 + 1
            expect(soma).to eq 2
        end
        it "1 + 1 < 3" do
            soma = 1 + 1
            expect(soma).to be < 3
        end
        it "1 + 1 >= 1.5" do
            soma = 1 + 1
            expect(soma).to be >= 1.5
        end
    end
end
