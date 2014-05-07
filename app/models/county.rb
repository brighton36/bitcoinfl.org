class County
  attr_accessor :label, :url

  def initialize(attrs = {})
    @label, @url = attrs['label'], attrs['url']
  end
end
