class ScoresController < ApplicationController
    def index
        scores = Score.all
        render json:scores
    end

    def show
        score = Score.find_by_id(params[:id])
        render json: score
    end

    def create
        /Save User and Score at same time/
        user = User.find_or_create_by(user_params)
        score = user.scores.build(score_params)
        if user.valid? && score.save
            render json: score
        else
            render json: {error: "We cant create that", status:400}
        end
    end

    def update
        score = Score.find_by_id(params[:id])
        if Score.update(score_params)
            render json: score
        else
            render json:{error: "We cant update that", status:400}
        end
    end

    def destroy
        score = Score.find_by_id(params[:id])
        Score.destroy
        render json: score
    end

    private
    
    def user_params
        params.require(:user).permit(:name)
    end

    def score_params
        params.require(:score).permit(:points)
    end
end
