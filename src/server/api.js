import Survey from '../common/models/Survey';

export function postSurvey(req, res) {
  const survey = new Survey();

  survey.author = req.body.author;
  survey.name = req.body.name;
  survey.description = req.body.description;
  survey.fields = req.body.fields;
  survey.startDate = req.body.startDate;
  survey.endDate = req.body.endDate;

  survey.save(
    err =>
      !!err
        ? res.send(err)
        : res.json({ message: 'Survey successfully added!' })
  );
}

export function getSurveys(req, res) {
  Survey.find(function(err, comments) {
    return !!err ? res.send(err) : res.json(comments);
  });
}
